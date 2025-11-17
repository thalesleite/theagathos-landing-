// src/app/page.tsx
import Link from "next/link"
import InterestForm from "@/components/marketing/InterestForm"
import { Benefits } from "@/components/marketing/Benefits"
import { Steps } from "@/components/marketing/Steps"
import { SocialProof } from "@/components/marketing/SocialProof"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Pill } from "@/components/ui/Pills"

export default function LandingPage() {
  return (
    <main>
      {/* HERO */}
      <Section className="hero section pt-12 sm:pt-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Pill>
              Entrega local · Curadoria independente · Sem taxas surpresa
            </Pill>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Livros em português, direto pra Irlanda 🇮🇪
            </h1>

            <p className="text-muted">
              Estamos montando o primeiro catálogo da Agathos Books — uma
              livraria feita para quem ama o verdadeiro, o bom e o belo. Diga
              quais títulos você quer ver por aqui e ganhe{" "}
              <strong>10% de desconto</strong> no lançamento.
            </p>

            <div className="flex justify-center">
              <Link href="#interesse" className="cta">
                Quero indicar meus livros 📚
              </Link>
            </div>

            <p className="text-xs text-muted">
              Entrega local, curadoria feita pela comunidade lusófona, sem taxas
              surpresa.
            </p>
          </div>
        </Container>
      </Section>

      {/* BENEFÍCIOS */}
      <Benefits />

      {/* COMO FUNCIONA */}
      <Steps />

      {/* FORMULÁRIO */}
      <Section id="interesse" className="section">
        <Container>
          <h2 className="text-lg font-semibold mb-2">
            Ajude a montar o catálogo da Agathos Books ✍️
          </h2>
          <p className="text-sm text-muted mb-4">
            Leva 1 minuto. Você recebe 10% de desconto no lançamento.
          </p>
          <InterestForm />
        </Container>
      </Section>

      {/* PROVA SOCIAL */}
      <SocialProof />

      {/* RODAPÉ */}
      <footer className="py-6">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center space-y-2">
            <p className="text-slate-700">
              Feito com ❤️ por <span className="font-medium">Thales Leite</span>{" "}
              — projeto independente
            </p>

            <p className="text-sm text-slate-600 space-x-2">
              <a
                className="underline hover:no-underline"
                href="mailto:thalesaleite@gmail.com"
              >
                📧 thalesaleite@gmail.com
              </a>
              <span>·</span>
              <a
                className="underline hover:no-underline"
                href="https://instagram.com/SEU_INSTAGRAM_PRO"
                target="_blank"
                rel="noreferrer"
              >
                📸 @SEU_INSTAGRAM_PRO
              </a>
              <span>·</span>
              <a
                className="underline hover:no-underline"
                href="https://SEU_SITE_PRO.dev"
                target="_blank"
                rel="noreferrer"
              >
                🌐 seu-site
              </a>
            </p>

            <p className="text-xs text-slate-500">
              Usarei seus dados apenas para avisar sobre o lançamento. Você pode
              sair da lista a qualquer momento.
            </p>
          </div>
        </Container>
      </footer>
    </main>
  )
}
