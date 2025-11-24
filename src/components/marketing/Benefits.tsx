import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"

export function Benefits() {
  return (
    <Section>
      <Container>
        <div className="grid gap-4 sm:grid-cols-3">
          <Benefit
            title="Catálogo com alma"
            text="Clássicos, filosofia, espiritualidade e literatura luso-brasileira — livros que elevam o espírito e formam o coração."
          />
          <Benefit
            title="Entrega local em Dublin"
            text="Sem alfândega, sem espera exagerada — prazos curtos e preço justo."
          />
          <Benefit
            title="Curadoria independente"
            text="Livros mais pedidos e garanto qualidade antes de quantidade"
          />
        </div>
      </Container>
    </Section>
  )
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="card p-4 bg-white/80 hover:shadow-md transition-shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{text}</p>
    </div>
  )
}
