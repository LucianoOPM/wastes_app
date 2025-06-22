"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  CreditCard,
  BarChart3,
  User,
  Tags,
  FileText,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";
import Link from "next/link";

interface MobileNavProps {
  currentPage: string;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    id: "dashboard",
  },
  {
    name: "Transacciones",
    href: "/transactions",
    icon: CreditCard,
    id: "transactions",
  },
  { name: "Resumen", href: "/summary", icon: BarChart3, id: "summary" },
  { name: "Categorías", href: "/categories", icon: Tags, id: "categories" },
  { name: "Reportes", href: "/reports", icon: FileText, id: "reports" },
  { name: "Perfil", href: "/profile", icon: User, id: "profile" },
];

export default function MobileNav({ currentPage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleThemeToggle = () => {
    if (typeof window !== "undefined" && window.toggleTheme) {
      window.toggleTheme();
      setIsDark(!isDark);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      {/* Mobile header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <h1 className="ml-3 text-lg font-bold text-gray-900 dark:text-white">
              ExpenseTracker
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleThemeToggle}
              className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 flex w-full max-w-xs">
            <div className="flex flex-col w-full bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="ml-3 text-lg font-bold text-gray-900 dark:text-white">
                    ExpenseTracker
                  </h1>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 px-4 pt-4 pb-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400"
                          : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                      }`}
                    >
                      <item.icon
                        className={`mr-3 h-5 w-5 ${
                          isActive
                            ? "text-primary-600 dark:text-primary-400"
                            : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                        }`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={handleLogout}
                  className="w-full group flex items-center px-3 py-2 text-sm font-medium text-danger-600 hover:bg-danger-50 dark:text-danger-400 dark:hover:bg-danger-900/20 rounded-lg transition-colors"
                >
                  <LogOut className="mr-3 h-5 w-5 text-danger-500 group-hover:text-danger-600 dark:group-hover:text-danger-300" />
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
