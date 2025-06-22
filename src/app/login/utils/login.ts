"use client";
import { LoginValues } from "../schema/login.schema";
import { handleApiErrors } from "@/lib/api.errors";

type SuccessResponse = {
  success: true;
  data: string;
};
type BadResponse = {
  success: false;
  error: string;
};

type LoginReturn = BadResponse | SuccessResponse;

export const login = async (values: LoginValues): Promise<LoginReturn> => {
  const jsonBody = JSON.stringify(values, null, 2);

  const res = await fetch("http://localhost:8080/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonBody,
    credentials: "include",
  });

  if (!res.ok) {
    const errorMessage = await handleApiErrors(res);
    return {
      success: false,
      error: errorMessage,
    };
  }

  const data = await res.json();
  return data;
};
