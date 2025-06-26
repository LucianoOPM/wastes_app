"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full bg-gray-300 dark:bg-gray-900">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SidebarTrigger />
            {children}
          </div>
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
}
