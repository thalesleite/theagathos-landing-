import { NextResponse } from "next/server"
import { interestSchema } from "@/lib/validation"

const SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbzfeqVhvAp1Ultg79EYYFXXRjty_cYwXK2EfwgaGIkBgw6GtNxGYBl2TqrpTefYneiP5w/exec"

// in-memory rate limit (per server instance)
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 20
const hits = new Map<string, { count: number; ts: number }>()

function rateLimit(ip: string) {
  const now = Date.now()
  const rec = hits.get(ip)
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now })
    return true
  }
  if (rec.count >= MAX_PER_WINDOW) return false
  rec.count += 1
  return true
}

export async function POST(req: Request) {
  const ip =
    (
      req.headers.get("x-forwarded-for") ||
      req.headers.get("cf-connecting-ip") ||
      ""
    )
      .split(",")[0]
      .trim() || "unknown"

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  try {
    const json = await req.json()
    const data = interestSchema.parse(json)

    // Log locally (useful to verify in dev)
    console.log("[interest] submission", { ip, ...data })

    // Fire-and-forget forward to Google Sheets
    if (SHEET_WEBHOOK) {
      ;(async () => {
        const ua = (req.headers.get("user-agent") || "").slice(0, 300)
        const url = new URL(SHEET_WEBHOOK)
        url.searchParams.set("ip", ip)
        url.searchParams.set("userAgent", ua)

        const controller = new AbortController()
        const TIMEOUT_MS = 12000
        const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

        try {
          const resp = await fetch(url.toString(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...data,
              submittedAt: new Date().toISOString(),
            }),
            signal: controller.signal,
          })
          clearTimeout(timeout)
          const txt = await resp.text().catch(() => "")
          console.log("[interest] sheet forward status:", resp.status, txt)
        } catch (err) {
          clearTimeout(timeout)
          console.error("[interest] sheet forward failed:", err)
        }
      })()
    } else {
      console.warn("[interest] SHEET_WEBHOOK not set; skipping forward")
    }

    // Respond to the user immediately (don’t block on Sheets)
    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Invalid payload"
    return NextResponse.json({ error: msg }, { status: 400 })
  }
}
