import { z } from "zod"

export const interestSchema = z
  .object({
    name: z.string().trim().optional(),
    email: z.string().email(),
    city: z.string().trim().optional(),
    titles: z.string().trim().optional(),
    authors: z.string().trim().optional(),
    inStock: z.boolean().optional(),
    onDemand: z.boolean().optional(),
    priceRange: z.enum(["", "<=15", "15-25", "25-40", ">40"]).optional(),
    preorder: z.boolean().optional(),
    instagram: z.string().trim().optional(),
    notes: z.string().trim().optional(),

    consent: z.boolean().refine((v) => v === true, {
      message: "Consent is required",
    }),
  })
  .strict()
