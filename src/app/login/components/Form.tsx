"use client";

import { Mail, Lock } from "lucide-react";
import { useActionState } from "react";
import { loginAction } from "../actions";
import { useForm, getInputProps, getFormProps } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { LoginFormSchema } from "../schema/login.schema";

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

  return (
    <form action={formAction} {...getFormProps(form)} className="space-y-6">
      {/* <!-- Error Message --> */}
      {form.errors && (
        <div
          id="error-message"
          className="bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 px-4 py-3 rounded-lg text-sm"
        >
          {form.errors}
        </div>
      )}
      <div>
        <label
          htmlFor={fields.email.id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Correo Electrónico
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            {...getInputProps(fields.email, { type: "email" })}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="tu@email.com"
          />
        </div>
        {fields.email.errors && <span>{fields.email.errors}</span>}
      </div>

      <div>
        <label
          htmlFor={fields.password.id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Contraseña
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            {...getInputProps(fields.password, { type: "password" })}
            required
            minLength={6}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="••••••••"
          />
        </div>
        {fields.password.errors && <div>{fields.password.errors}</div>}
      </div>
      <div>
        <label
          htmlFor={fields.keepSession.id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Recuerdame
        </label>
        <div className="relative">
          {/* <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
          <input {...getInputProps(fields.keepSession, { type: "checkbox" })} />
        </div>
        {fields.keepSession.errors && <div>{fields.keepSession.errors}</div>}
      </div>

      {/* <!-- Submit Button --> */}
      <button
        disabled={isLoading}
        type="submit"
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}
