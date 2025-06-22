"use client";
import { User, Mail, Lock } from "lucide-react";
import { parseWithZod } from "@conform-to/zod";
import { RegisterSchema } from "../schema/register.schema";
import { useForm } from "@conform-to/react";
import { registerAction } from "../actions";
import { useActionState } from "react";

export default function RegisterForm() {
  const [formState, formAction] = useActionState(registerAction, undefined);
  const [form, fields] = useForm({
    lastResult: formState,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: RegisterSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      id={form.id}
      className="space-y-6"
      onSubmit={form.onSubmit}
      action={formAction}
    >
      {form.errors && <span>{form.errors}</span>}
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Nombre(s)
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            key={fields.firstName.key}
            name={fields.firstName.name}
            defaultValue={fields.firstName.initialValue}
            id="firstName"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="Tu nombre completo"
          />
        </div>
        <div>{fields.firstName.errors}</div>
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Apellido(S)
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="lastName"
            key={fields.lastName.key}
            name={fields.lastName.name}
            defaultValue={fields.lastName.initialValue}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="Tus apellidos"
          />
        </div>
        <div>{fields.lastName.errors}</div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Correo Electrónico
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            key={fields.email.key}
            name={fields.email.name}
            defaultValue={fields.email.initialValue}
            type="email"
            id="email"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="tu@email.com"
          />
        </div>
        {fields.email.errors && <span>{fields.email.errors}</span>}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Contraseña
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            key={fields.password.key}
            name={fields.password.name}
            defaultValue={fields.password.initialValue}
            type="password"
            id="password"
            required
            minLength={6}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="Mínimo 6 caracteres"
          />
        </div>
        {fields.password.errors && <span>{fields.password.errors}</span>}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Confirmar Contraseña
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="password"
            id="confirmPassword"
            key={fields.confirmPassword.key}
            name={fields.confirmPassword.name}
            defaultValue={fields.confirmPassword.initialValue}
            required
            minLength={6}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="Confirma tu contraseña"
          />
        </div>
        {fields.confirmPassword.errors && (
          <span>{fields.confirmPassword.errors}</span>
        )}
      </div>

      {/* <!-- Submit Button --> */}
      <button
        type="submit"
        id="register-button"
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center hover:cursor-pointer"
      >
        <span id="register-text">Crear Cuenta</span>
        <div
          id="register-spinner"
          className="hidden ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
        ></div>
      </button>
    </form>
  );
}
