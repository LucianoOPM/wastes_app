"use server";
import { parseWithZod } from "@conform-to/zod";
import { LoginFormSchema } from "./schema/login.schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function loginAction(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: LoginFormSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const formValues = submission.value;

  try {
    await signIn("credentials", {
      email: formValues.email,
      password: formValues.password,
      keepSession: formValues.keepSession,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      const errorMessage =
        error?.cause?.err?.message || "Error de autenticación";
      return submission.reply({ formErrors: [errorMessage] });
    } else {
      return submission.reply({
        formErrors: ["Error en la autenticación del usuario"],
      });
    }
  }

  redirect("/");
}
