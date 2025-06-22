import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { ArrowLeft, CreditCard } from "lucide-react";
import LoginForm from "./components/Form";

export const metadata: Metadata = {
  title: "Iniciar Sesión - ExpenseTracker",
};

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* <!-- Back to landing --> */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </div>

        {/* <!-- Login Card --> */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          {/* <!-- Header --> */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Iniciar Sesión
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Accede a tu cuenta de ExpenseTracker
            </p>
          </div>

          {/* <!-- Login Form --> */}
          <LoginForm />

          {/* <!-- Register Link --> */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              ¿No tienes cuenta?
              <Link
                href="/register"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium ml-1"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
