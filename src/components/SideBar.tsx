"use client";
import React from "react";
import {
  LayoutDashboard,
  CreditCard,
  BarChart3,
  User,
  Tags,
  FileText,
  Settings,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";
import Link from "next/link";

// Extend the Window interface to include toggleTheme
declare global {
  interface Window {
    toggleTheme?: () => void;
  }
}

interface SidebarProps {
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

export default function Sidebar({ currentPage }: SidebarProps) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleThemeToggle = () => {
    console.log(isDark);

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
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center px-6 py-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
            ExpenseTracker
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4 space-y-1">
        {navigation.map((item) => {
          const isActive = currentPage === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
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

      {/* Theme Toggle, Settings & Logout */}
      <div className="px-4 pb-6 space-y-2">
        <button
          onClick={handleThemeToggle}
          className="w-full group flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          {isDark ? (
            <Sun className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
          ) : (
            <Moon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
          )}
          {isDark ? "Tema Claro" : "Tema Oscuro"}
        </button>

        <Link
          href="/settings"
          className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
          Configuración
        </Link>

        <button
          onClick={handleLogout}
          className="w-full group flex items-center px-3 py-2 text-sm font-medium text-danger-600 hover:bg-danger-50 dark:text-danger-400 dark:hover:bg-danger-900/20 rounded-lg transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 text-danger-500 group-hover:text-danger-600 dark:group-hover:text-danger-300" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
