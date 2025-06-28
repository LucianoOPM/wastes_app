"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Transaction {
  id: number;
  date: Date;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}

interface ExpenseChartProps {
  transactions: Transaction[];
}

export function ExpenseChart({ transactions }: ExpenseChartProps) {
  // Process data for chart - group by month and year
  const monthlyData = transactions.reduce(
    (
      acc: {
        [key: string]: {
          ingresos: number;
          gastos: number;
          month: string;
          year: number;
        };
      },
      transaction
    ) => {
      const date = new Date(transaction.date);
      const year = date.getFullYear();
      const month = date.getMonth();
      const monthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
      const monthName = date.toLocaleDateString("es-ES", { month: "short" });

      if (!acc[monthKey]) {
        acc[monthKey] = {
          ingresos: 0,
          gastos: 0,
          month: monthName,
          year: year,
        };
      }

      if (transaction.type === "income") {
        acc[monthKey].ingresos += transaction.amount;
      } else {
        acc[monthKey].gastos += Math.abs(transaction.amount);
      }

      return acc;
    },
    {}
  );

  // Convert to array format for chart and sort by date
  const chartData = Object.entries(monthlyData)
    .map(([monthKey, data]) => ({
      month: data.month,
      ingresos: data.ingresos,
      gastos: data.gastos,
      sortKey: monthKey,
    }))
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
    .slice(-6); // Show last 6 months

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Ingresos vs Gastos</CardTitle>
        <CardDescription>
          Comparación mensual de tu actividad financiera (últimos 6 meses)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value: number, name: string) => [
                `$${value.toLocaleString()}`,
                name === "ingresos" ? "Ingresos" : "Gastos",
              ]}
              labelStyle={{ color: "#374151", fontWeight: "600" }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar
              dataKey="ingresos"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
              name="ingresos"
            />
            <Bar
              dataKey="gastos"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
              name="gastos"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
