import { z } from "zod";

export const characterSchema = z.object({
  name: z.string().min(1, "Campo obrigatório!"),
  house: z.string().min(1, "Campo obrigatório!"),
  age: z.number().int().positive("Idade deve ser positiva"),
  gender: z.string().min(1, "Campo obrigatório!"),
  blood_status: z.string().min(1, "Campo obrigatório!"),
  role: z.string().min(1, "Campo obrigatório!"),
  wand: z.string().min(1, "Campo obrigatório!"),
  patrono: z.string().nullable(),
  image_url: z.string(),
});

export type CharacterSchemaType = z.infer<typeof characterSchema>;
