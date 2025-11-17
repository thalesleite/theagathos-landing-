import { z } from "zod"

export const interestSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  city: z.string().min(2).max(80).optional().or(z.literal("")),
  titles: z.string().min(2, "Conte ao menos um título / autor"),
  budget: z.enum(["<15", "15-25", "25-40", "40+"]).optional(),
  preorder: z.boolean().optional(),
  discovery: z
    .enum(["instagram", "amigos", "busca", "evento", "outro"])
    .optional(),
  notes: z.string().max(500).optional(),
})

export type InterestPayload = z.infer<typeof interestSchema>
