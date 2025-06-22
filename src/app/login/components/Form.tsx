"use client";

import { EyeOff, Eye } from "lucide-react";
import { useActionState, useState } from "react";
import { loginAction } from "../actions";
import { useForm, getInputProps, getFormProps } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { LoginFormSchema } from "../schema/login.schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  const [formState, formAction, isLoading] = useActionState(
    loginAction,
    undefined
  );
  const [form, fields] = useForm({
    lastResult: formState,
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: LoginFormSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} {...getFormProps(form)} className="space-y-4">
      <div className={`space-y-2 ${fields.email.errors ? "text-red-500" : ""}`}>
        <Label htmlFor={fields.email.id}>
          Correo Electrónico{<span className="text-red-500">*</span>}
        </Label>
        <Input
          {...getInputProps(fields.email, { type: "email" })}
          placeholder="tu@email.com"
          required
          className="h-11"
        />
        {fields.email.errors && <span>{fields.email.errors}</span>}
      </div>

      <div
        className={`space-y-2 ${fields.password.errors ? "text-red-500" : ""}`}
      >
        <Label htmlFor={fields.password.id}>
          Contraseña{<span className="text-red-500">*</span>}
        </Label>
        <div className="relative">
          <Input
            {...getInputProps(fields.password, {
              type: showPassword ? "text" : "password",
            })}
            placeholder="Tu contraseña"
            required
            className="h-11 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {fields.password.errors && <span>{fields.password.errors}</span>}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            {...getInputProps(fields.keepSession, { type: "checkbox" })}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <Label
            htmlFor={fields.keepSession.id}
            className="text-sm text-gray-600"
          >
            Recordarme
          </Label>
        </div>
        <Link href="#" className="text-sm text-blue-600 hover:text-blue-700">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full h-11 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"
        disabled={isLoading}
      >
        {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
      </Button>
    </form>
  );
}
