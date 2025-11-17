import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

export default function ThanksPage() {
  return (
    <main>
      <Section className="pt-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-bold">
              Obrigado por fazer parte da Agathos Books 🎉
            </h1>
            <p className="text-slate-700">
              Seu cupom de <strong>10%</strong> chegará no e-mail quando
              abrirmos o catálogo. Suas sugestões vão ajudar a escolher os
              primeiros livros que cruzarão o Atlântico. Enquanto isso, siga a
              gente no Instagram para votar nas capas e acompanhar os
              bastidores.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://instagram.com/agathosbooks"
                target="_blank"
                className="rounded-md bg-[var(--brand-accent)] text-white px-4 py-2 font-medium hover:opacity-90 transition"
              >
                👉 Siga @agathosbooks no Instagram
              </a>
              <Link
                href="/"
                className="rounded-md ring-1 ring-slate-200 bg-white px-4 py-2 font-medium hover:bg-slate-50"
              >
                Voltar à página inicial
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
