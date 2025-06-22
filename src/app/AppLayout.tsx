"use client";
import { ReactNode } from "react";
import Sidebar from "@/components/SideBar";
import MobileNav from "@/components/MobileNav";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  const pathName = usePathname();
  return (
    <div className="flex h-full">
      {/* <!-- Desktop Sidebar --> */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col">
        <Sidebar currentPage={pathName} />
      </div>

      {/* <!-- Main Content --> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <!-- Mobile Navigation --> */}
        <div className="lg:hidden">
          <MobileNav currentPage={pathName} />
        </div>

        {/* <!-- Page Content --> */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
