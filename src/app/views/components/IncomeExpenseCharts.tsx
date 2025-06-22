"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  month: string;
  income: number;
  expense: number;
}

interface IncomeExpenseChartProps {
  data: ChartData[];
}

type CustomTooltipProps = {
  active: boolean;
  payload: { name: string; value: Date; color: string }[];
  label: string;
};

export default function IncomeExpenseChart({ data }: IncomeExpenseChartProps) {
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            {label}
          </p>
          {payload.map((item, index: number) => (
            <p key={index} className="text-sm" style={{ color: item.color }}>
              {item.name}: ${item.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Ingresos vs Gastos
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              className="text-gray-600 dark:text-gray-400"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              className="text-gray-600 dark:text-gray-400"
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip
              content={
                <CustomTooltip active={false} payload={[]} label="Ejemplo" />
              }
            />
            <Bar
              dataKey="income"
              name="Ingresos"
              fill="#22c55e"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expense"
              name="Gastos"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
