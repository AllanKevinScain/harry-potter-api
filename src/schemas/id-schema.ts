import { z } from "zod";

export const idSchema = z.object({
  id: z.string().nonempty("Campo obrigatório!"),
});

export type IdSchemaType = z.infer<typeof idSchema>;
