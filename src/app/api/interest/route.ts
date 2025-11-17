import { NextResponse } from "next/server"
import { interestSchema } from "@/lib/validation"

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
  const ip = (req.headers.get("x-forwarded-for") || "unknown")
    .split(",")[0]
    .trim()
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  try {
    const json = await req.json()
    const data = interestSchema.parse(json)

    // TODO: aqui você pode:
    // - enviar para seu backend Express (fetch("http://api/.../interest", {method:"POST", body: JSON.stringify(data)}))
    // - gravar no Mongo/Planetscale, enviar e-mail, etc.

    console.log("[interest] new submission", { ip, ...data })
    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Invalid payload" },
      { status: 400 }
    )
  }
}
