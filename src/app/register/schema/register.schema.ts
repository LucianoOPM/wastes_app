import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  "g"
);

const RegisterBaseSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Email must be a valid email address" })
      .nonempty({
        message: "Email is required and must be a valid email address",
      }),
    password: z
      .string({ required_error: "Password is required" })
      .regex(passwordRegex, {
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number",
      }),
    confirmPassword: z.string({
      required_error: "Confirm password is required",
    }),
    firstName: z
      .string({ required_error: "First name is required" })
      .min(2, { message: "First name must be at least 2 characters long" }),
    lastName: z
      .string({ required_error: "Last name is required" })
      .min(2, { message: "Last name must be at least 2 characters long" }),
  })
  .required();

export const RegisterSchema = RegisterBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  }
);

export const ApiRegisterSchema = RegisterBaseSchema.omit({
  confirmPassword: true,
}).extend({
  isActive: z.coerce.boolean(),
  profileId: z
    .number({ required_error: "Profile ID is required" })
    .int({ message: "Profile ID must be an integer" })
    .positive({ message: "Profile ID must be a positive integer" }),
});

export type Register = z.infer<typeof RegisterSchema>;
export type ApiRegister = z.infer<typeof ApiRegisterSchema>;
