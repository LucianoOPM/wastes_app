"use client";

import { AddTransactionForm } from "@/components/add-transaction-form";
import { ExpenseChart } from "@/components/ExpenseChart";
import { ExportButtons } from "@/components/export-buttons";
import { TransactionTable } from "@/components/transaction-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockTransactions } from "@/utils/mockData";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useState } from "react";

type Transaction = {
  id: number;
  description: string;
  amount: number;
  type: "expense" | "income";
  category: string;
  date: Date;
};

export default function Dashboard() {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [showAddForm, setShowAddForm] = useState(false);

  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = Math.abs(
    transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0)
  );
  const balance = totalIncome - totalExpenses;

  // Calculate monthly changes (comparing last 2 months)
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const currentMonthTransactions = transactions.filter((t) => {
    const date = new Date(t.date);
    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  });

  const lastMonthTransactions = transactions.filter((t) => {
    const date = new Date(t.date);
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    return (
      date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear
    );
  });

  const currentMonthIncome = currentMonthTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const lastMonthIncome = lastMonthTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const incomeChange =
    lastMonthIncome > 0
      ? ((currentMonthIncome - lastMonthIncome) / lastMonthIncome) * 100
      : 0;

  const currentMonthExpenses = Math.abs(
    currentMonthTransactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0)
  );
  const lastMonthExpenses = Math.abs(
    lastMonthTransactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0)
  );
  const expenseChange =
    lastMonthExpenses > 0
      ? ((currentMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100
      : 0;

  const addTransaction = (newTransaction: Omit<Transaction, "id" | "date">) => {
    const transaction: Transaction = {
      id: transactions.length + 1,
      ...newTransaction,
      date: new Date(),
    };
    setTransactions([transaction, ...transactions]);
    setShowAddForm(false);
  };
  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Resumen de tu actividad financiera
          </p>
        </div>
        <div className="flex gap-2">
          <ExportButtons transactions={transactions} />
          <Button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Agregar Movimiento
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Balance Total
            </CardTitle>
            <Wallet className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              ${balance.toLocaleString()}
            </div>
            <Badge
              variant={balance >= 0 ? "default" : "destructive"}
              className="mt-2"
            >
              {balance >= 0 ? "Positivo" : "Negativo"}
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Ingresos
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${currentMonthIncome.toLocaleString()}
            </div>
            <div
              className={`flex items-center text-xs mt-2 ${
                incomeChange >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {incomeChange >= 0 ? (
                <ArrowUpIcon className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDownIcon className="h-3 w-3 mr-1" />
              )}
              {Math.abs(incomeChange).toFixed(1)}% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Gastos
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              ${currentMonthExpenses.toLocaleString()}
            </div>
            <div
              className={`flex items-center text-xs mt-2 ${
                expenseChange <= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {expenseChange <= 0 ? (
                <ArrowDownIcon className="h-3 w-3 mr-1" />
              ) : (
                <ArrowUpIcon className="h-3 w-3 mr-1" />
              )}
              {Math.abs(expenseChange).toFixed(1)}% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Transacciones
            </CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {currentMonthTransactions.length}
            </div>
            <p className="text-xs text-gray-600 mt-2">Este mes</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpenseChart transactions={transactions} />
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Gastos por Categoría</CardTitle>
            <CardDescription>
              Distribución de tus gastos principales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Alimentación",
                "Transporte",
                "Entretenimiento",
                "Salud",
                "Compras",
              ].map((category, index) => {
                const categoryExpenses = Math.abs(
                  transactions
                    .filter(
                      (t) => t.category === category && t.type === "expense"
                    )
                    .reduce((sum, t) => sum + t.amount, 0)
                );
                const percentage =
                  totalExpenses > 0
                    ? (categoryExpenses / totalExpenses) * 100
                    : 0;

                return (
                  <div
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          index === 0
                            ? "bg-blue-500"
                            : index === 1
                            ? "bg-green-500"
                            : index === 2
                            ? "bg-yellow-500"
                            : index === 3
                            ? "bg-red-500"
                            : "bg-purple-500"
                        }`}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">
                        ${categoryExpenses.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Movimientos Recientes</CardTitle>
          <CardDescription>
            Historial de tus transacciones más recientes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionTable transactions={transactions.slice(0, 10)} />
        </CardContent>
      </Card>

      {/* Add Transaction Modal */}
      {showAddForm && (
        <AddTransactionForm
          onSubmit={addTransaction}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}
