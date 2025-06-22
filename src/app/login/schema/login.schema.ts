import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
  keepSession: z.coerce.boolean().default(false),
});

export type LoginValues = z.infer<typeof LoginFormSchema>;
