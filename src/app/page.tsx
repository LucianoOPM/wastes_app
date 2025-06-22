import { Metadata } from "next";
import LandingPage from "./views/LandingPage";
import AppLayout from "./AppLayout";
import Dashboard from "./views/Dashboard";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "ExpenseTracker - Control Inteligente de Gastos",
};

export default async function Home() {
  const session = await auth();

  if (!session) {
    return <LandingPage />;
  } else {
    return (
      <AppLayout>
        <Dashboard />;
      </AppLayout>
    );
  }
}
