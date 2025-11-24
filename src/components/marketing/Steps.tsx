import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"

export function Steps() {
  return (
    <Section>
      <Container>
        <div className="grid gap-4 sm:grid-cols-3">
          <Step
            img="/images/stack.png"
            title="Você indica"
            text="Conte quais livros e autores quer ver no catálogo."
          />
          <Step
            img="/images/hero-books.png"
            title="Eu organizo o 1º lote"
            text="Escolho os títulos mais pedidos e preparo o estoque (e também opção sob encomenda)."
          />
          <Step
            img="/images/delivery.png"
            title="Você compra com 10% off"
            text="Quando o primeiro lote estiver pronto, você recebe o acesso em primeira mão."
          />
        </div>
      </Container>
    </Section>
  )
}

function Step({
  img,
  title,
  text,
}: {
  img: string
  title: string
  text: string
}) {
  return (
    <div className="card overflow-hidden bg-white/80">
      <Image
        src={img}
        alt={title}
        width={640}
        height={420}
        className="w-full h-50 object-fill"
      />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{text}</p>
      </div>
    </div>
  )
}
