# Agathos Books — Landing (MVP)

A lightweight, fast, and accessible landing page to validate **Agathos Books**: a Portuguese-language web bookstore for readers in Dublin/Ireland. The page collects interest (preferred titles/authors), explains the concept, and builds an early waitlist.

## What you get

- ⚡ **Next.js 15 + React + TypeScript + Tailwind**
- 🎯 Clear value prop + benefits + how-it-works
- 📝 **Interest form** with humane copy (1-minute survey)
- ✅ Serverless **API endpoint** to receive submissions
- 🖼️ Brand-aligned visuals and subtle motion
- 🔍 SEO/OG tags & responsive layout
- ☁️ **Vercel-ready** (works on any Node host)

---

## Goals (MVP validation)

- **100+** responses in 3 weeks
- **20–30** repeated titles for the first catalog
- **40%** willing to pre-order (signals inventory mix)

---

## Tech Stack

- **Next.js** (App Router), **React**, **TypeScript**
- **Tailwind CSS** (utility-first)
- Small **UI atoms** (Container, Section, Pill)
- Optional email delivery (Resend/Mailgun) via API route

---

## Getting Started

### Prerequisites

- **Node.js** 18.18+ (or 20+)
- npm / pnpm / yarn (examples use npm)

### Install & Run

```bash
npm install
npm run dev
# → http://localhost:3000
```

### Build & Start

```bash
npm run build
npm start
```

### Environment Variables

The landing works without any secrets (submissions log to the server console by default).

If you want to send a confirmation email or forward submissions, create .env.local:

```bash
# Email (Resend example)
RESEND_API_KEY=your_resend_key
EMAIL_FROM="Agathos Books <noreply@yourdomain>"
EMAIL_TO="thalesaleite@gmail.com"   # where to forward submissions
```

The API route will detect these and attempt to send an email; otherwise it just logs.

### Form Submissions

- **Client:** components/marketing/InterestForm.tsx

- **Server:** app/api/interest/route.ts (HTTP POST)

## Payload (example):

```json
{
  "name": "Maria",
  "email": "maria@example.com",
  "city": "Dublin",
  "wishlist": "Machado de Assis, Saramago...",
  "budget": "€10–€20",
  "preorder": true,
  "notes": "Gostaria de edições de bolso."
}
```

## Default behavior:

- Logs to server console (good for MVP/manual validation).

- If RESEND_API_KEY + EMAIL_TO exist, also forwards a tidy email and can send an optional auto-reply.

Want Google Sheets/Airtable/Notion? Replace the logic inside route.ts—keep the same request shape.

### Customize

## Colors & Tokens

Edit styles/globals.css (CSS variables + Tailwind theme tokens):

```css
:root {
  --brand-600: #0ea5a5;
  --brand-700: #0b8585;
}
```

## Copy

Hero/Benefits/Steps/SocialProof text lives in components/marketing/\*.

Update CTAs and microcopy directly in JSX.

## Images

Replace assets under public/images/ but keep the same filenames or update the <Image> paths.

## Contact & Links

Footer uses:

- Email: thalesaleite@gmail.com

- Instagram: your professional handle (update link)

- Personal site: update the link

## SEO & Sharing

We set sensible defaults in `app/layout.tsx` (via the `metadata` export). Update:

- `metadata.title` and `metadata.description`
- `openGraph` & `twitter` images (ex.: `public/images/hero-books.jpg`)

---

## Accessibility

- Proper headings, labels, and `aria-*` attributes no formulário
- Contraste de cores suficiente (paleta checada)
- Foco de teclado visível; botões são `<button>`, links são `<a>`

---

## Performance

- Imagens locais otimizadas via `next/image`
- Componentes enxutos; sem UI kits pesados
- Tailwind JIT remove CSS não utilizado em produção

---

## Deployment

### Vercel (recomendado)

1. Faça push para GitHub/GitLab/Bitbucket.
2. Importe o repositório no Vercel.
3. (Opcional) Adicione variáveis `.env` para e-mail.
4. Deploy.

### Outros hosts

- `npm run build` → sirva com `npm start` (Node runtime)  
  ou exporte um build estático se você remover a rota de API.

---

## Roadmap

- Persistir envios em um DB (Neon/PlanetScale/Dynamo/Firestore)
- Tabela admin para revisar/exportar CSV
- Honeypot & rate limiting na API
- i18n: alternância EN/PT
- Analytics simples (Plausible/Umami)

---

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

## License

MIT — use, adapt, and launch 🚀

---

## Contact

- **_Email:_** thalesaleite@gmail.com

- **_Instagram:_** @thalesaleite (professional)

- **_Site:_** https://thalesleite.dev

This landing is intentionally lean. Ship it, validate demand, and iterate fast.
