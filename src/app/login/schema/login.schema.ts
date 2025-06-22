import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string({ required_error: "Este campo es requerido" })
    .email({ message: "El campo debe ser en formato email" })
    .nonempty("Este campo no puede estar vacío"),
  password: z
    .string({ required_error: "Este campo es requerido" })
    .nonempty("Este campo no puede estar vacio"),
  keepSession: z.coerce.boolean().default(false),
});

export type LoginValues = z.infer<typeof LoginFormSchema>;
