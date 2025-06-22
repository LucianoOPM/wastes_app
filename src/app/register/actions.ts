"use server";
import { parseWithZod } from "@conform-to/zod";
import { type ApiRegister, RegisterSchema } from "./schema/register.schema";
import { redirect } from "next/navigation";
import { handleApiErrors } from "@/lib/api.errors";

export async function registerAction(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: RegisterSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }
  const data = submission.value;
  const toSendBody: ApiRegister = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    profileId: 1,
    isActive: true,
  };
  const bodyToJson = JSON.stringify(toSendBody, null, 2);

  try {
    const res = await fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyToJson,
    });

    if (!res.ok) {
      const errorMessage = await handleApiErrors(res);
      throw new Error(errorMessage);
    }
    redirect("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return submission.reply({ formErrors: [error.message] });
    }
    return submission.reply({ formErrors: ["Ocurrió un error desconocido"] });
  }
}
