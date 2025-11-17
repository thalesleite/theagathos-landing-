"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

export function SocialProof() {
  return (
    <Section className="section">
      <Container>
        <div className="card p-6 text-center space-y-2">
          <p className="text-lg font-semibold">
            “Mais de 100 leitores já enviaram sugestões.”
          </p>
          <p className="text-sm text-muted">
            Obrigado por ajudar a trazer mais beleza e cultura em português para
            a Irlanda 🇵🇹🇧🇷🇮🇪
          </p>
        </div>
      </Container>
    </Section>
  )
}
