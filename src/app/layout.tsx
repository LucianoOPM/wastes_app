import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinanceTracker - Control de Gastos Personales",
  description:
    "Gestiona tus finanzas personales con inteligencia y simplicidad. Controla gastos, analiza ingresos y optimiza tu presupuesto.",
  keywords:
    "finanzas personales, control de gastos, presupuesto, ahorro, ingresos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="prevent-layout-shift">
      <body className={`${inter.className} prevent-layout-shift`}>
        {children}
      </body>
    </html>
  );
}
