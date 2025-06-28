import { Plus } from "lucide-react";
import StatsCard from "./components/StatsCard";
import { Metadata } from "next";
import ExpenseChart from "../../components/ExpenseChart";
import IncomeExpenseChart from "./components/IncomeExpenseCharts";
import {
  mockExpensesByCategory,
  mockIncomeExpenseData,
} from "@/utils/mockData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard - ExpenseTracker",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* <!-- Header --> */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Resumen de tu actividad financiera
          </p>
        </div>
        <button
          id="add-transaction-btn"
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar</span>
        </button>
      </div>

      {/* <!-- Stats Cards --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Saldo Actual"
          value="€325"
          iconName="Wallet"
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Ingresos del Mes"
          value="€4,300"
          iconName="TrendingUp"
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Gastos del Mes"
          value="€3,975"
          iconName="TrendingDown"
          trend={{ value: -5, isPositive: false }}
        />
        <StatsCard
          title="Ahorro del Mes"
          value="€325"
          iconName="PiggyBank"
          trend={{ value: 25, isPositive: true }}
        />
      </div>

      {/* <!-- Charts --> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpenseChart data={mockExpensesByCategory} />
        <IncomeExpenseChart data={mockIncomeExpenseData} />
      </div>

      {/* <!-- Recent Transactions --> */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Transacciones Recientes
            </h3>
            <Link
              href="/transactions"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
            >
              Ver todas
            </Link>
          </div>
        </div>
        {/* //TODO Esto será un function component con fallback tutorial de midudev */}
        <div className="p-6">
          <div id="recent-transactions" className="space-y-4">
            {/* <!-- Transactions will be loaded here --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
