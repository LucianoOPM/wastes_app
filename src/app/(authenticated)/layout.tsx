import AppLayout from "@/app/AppLayout";
import { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default async function AuthLayout({ children }: LayoutProps) {
  const session = await auth();
  if (session) {
    return <AppLayout>{children}</AppLayout>;
  } else {
    redirect("/login");
  }
}
