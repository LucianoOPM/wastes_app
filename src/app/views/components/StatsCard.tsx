import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  iconName: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const iconMap = {
  Wallet: Wallet,
  TrendingUp: TrendingUp,
  TrendingDown: TrendingDown,
  PiggyBank: PiggyBank,
};

export default function StatsCard({
  title,
  value,
  iconName,
  trend,
  className = "",
}: StatsCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Wallet;

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 ${className}`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
          {trend && (
            <div className="flex items-center mt-1">
              <span
                className={`text-sm font-medium ${
                  trend.isPositive
                    ? "text-success-600 dark:text-success-400"
                    : "text-danger-600 dark:text-danger-400"
                }`}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}%
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                vs mes anterior
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
