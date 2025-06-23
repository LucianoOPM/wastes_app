"use client";
import { EyeOff, Eye } from "lucide-react";
import { parseWithZod } from "@conform-to/zod";
import { RegisterSchema } from "../schema/register.schema";
import { getInputProps, useForm } from "@conform-to/react";
import { registerAction } from "../actions";
import { useActionState, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  const [formState, formAction, isLoading] = useActionState(
    registerAction,
    undefined
  );
  const [form, fields] = useForm({
    lastResult: formState,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: RegisterSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form
      action={formAction}
      onSubmit={form.onSubmit}
      id={form.id}
      className="space-y-4"
    >
      {/*//TODO Cambiar por un alertify/toastify */}
      {form.errors && (
        <div
          id="error-message"
          className="bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 px-4 py-3 rounded-lg text-sm"
        >
          {form.errors}
        </div>
      )}
      <div
        className={`space-y-2 ${fields.firstName.errors ? "text-red-500" : ""}`}
      >
        <Label htmlFor={fields.firstName.id}>
          Nombre(s){<span className="text-red-500">*</span>}
        </Label>
        <Input
          {...getInputProps(fields.firstName, { type: "text" })}
          placeholder="Tu nombre"
          required
          className="h-11"
        />
        {fields.firstName.errors && (
          <span className="text-sm">{fields.firstName.errors}</span>
        )}
      </div>
      <div
        className={`space-y-2 ${fields.lastName.errors ? "text-red-500" : ""}`}
      >
        <Label htmlFor={fields.lastName.id}>
          Apellido(s){<span className="text-red-500">*</span>}
        </Label>
        <Input
          {...getInputProps(fields.lastName, { type: "text" })}
          placeholder="Tus apellidos"
          required
          className="h-11"
        />
        {fields.lastName.errors && (
          <span className="text-sm">{fields.lastName.errors}</span>
        )}
      </div>

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
        {fields.email.errors && (
          <span className="text-sm">{fields.email.errors}</span>
        )}
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
            placeholder="Mínimo 8 caracteres"
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
        {fields.password.errors && (
          <span className="text-sm">{fields.password.errors}</span>
        )}
      </div>

      <div
        className={`space-y-2 ${
          fields.confirmPassword.errors ? "text-red-500" : ""
        }`}
      >
        <Label htmlFor={fields.confirmPassword.id}>
          Confirmar Contraseña{<span className="text-red-500">*</span>}
        </Label>
        <div className="relative">
          <Input
            {...getInputProps(fields.confirmPassword, {
              type: showConfirmPassword ? "text" : "password",
            })}
            placeholder="Confirma tu contraseña"
            required
            className="h-11 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {fields.confirmPassword.errors && (
          <span className="text-sm">{fields.confirmPassword.errors}</span>
        )}
      </div>

      <Button
        type="submit"
        className="w-full h-11 bg-blue-600 hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
      </Button>
    </form>
  );
}
