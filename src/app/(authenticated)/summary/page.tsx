import { TrendingUp, TrendingDown, Target, Calendar } from "lucide-react";
import IncomeExpenseChart from "@/app/views/components/IncomeExpenseCharts";
import ExpenseChart from "@/app/views/components/ExpenseChart";

export default function page() {
  return (
    <div className="space-y-6">
      {/* <!-- Header --> */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Resumen Financiero
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Análisis detallado de tu situación financiera
          </p>
        </div>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white">
            <option>Últimos 6 meses</option>
            <option>Este año</option>
            <option>Año pasado</option>
          </select>
        </div>
      </div>

      {/* <!-- Summary Cards --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-success-500 to-success-600 rounded-xl shadow-sm p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-success-100">Ingresos Totales</p>
              <p className="text-2xl font-bold">€26,300</p>
              <p className="text-sm text-success-100 mt-1">
                +12% vs período anterior
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-success-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-danger-500 to-danger-600 rounded-xl shadow-sm p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-danger-100">Gastos Totales</p>
              <p className="text-2xl font-bold">€23,875</p>
              <p className="text-sm text-danger-100 mt-1">
                -3% vs período anterior
              </p>
            </div>
            <TrendingDown className="w-8 h-8 text-danger-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-sm p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-100">Ahorro Total</p>
              <p className="text-2xl font-bold">€2,425</p>
              <p className="text-sm text-primary-100 mt-1">Meta: €3,000</p>
            </div>
            <Target className="w-8 h-8 text-primary-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-sm p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Promedio Mensual</p>
              <p className="text-2xl font-bold">€4,383</p>
              <p className="text-sm text-purple-100 mt-1">Ingresos netos</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* <!-- Charts Grid --> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <!-- Income vs Expenses Chart --> */}
        <IncomeExpenseChart data={[]} />

        {/* <!-- Expenses by Category --> */}
        <ExpenseChart data={[]} />
      </div>

      {/* <!-- Monthly Breakdown --> */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Desglose Mensual
          </h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Mes
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Ingresos
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Gastos
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Balance
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Ahorro
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Enero 2025
                  </td>
                  <td className="py-4 text-sm text-success-600 dark:text-success-400">
                    €4,300
                  </td>
                  <td className="py-4 text-sm text-danger-600 dark:text-danger-400">
                    €3,975
                  </td>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    €325
                  </td>
                  <td className="py-4 text-sm text-primary-600 dark:text-primary-400">
                    €325
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Diciembre 2024
                  </td>
                  <td className="py-4 text-sm text-success-600 dark:text-success-400">
                    €5,200
                  </td>
                  <td className="py-4 text-sm text-danger-600 dark:text-danger-400">
                    €4,800
                  </td>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    €400
                  </td>
                  <td className="py-4 text-sm text-primary-600 dark:text-primary-400">
                    €400
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Noviembre 2024
                  </td>
                  <td className="py-4 text-sm text-success-600 dark:text-success-400">
                    €4,800
                  </td>
                  <td className="py-4 text-sm text-danger-600 dark:text-danger-400">
                    €4,200
                  </td>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    €600
                  </td>
                  <td className="py-4 text-sm text-primary-600 dark:text-primary-400">
                    €600
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Octubre 2024
                  </td>
                  <td className="py-4 text-sm text-success-600 dark:text-success-400">
                    €4,300
                  </td>
                  <td className="py-4 text-sm text-danger-600 dark:text-danger-400">
                    €3,900
                  </td>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    €400
                  </td>
                  <td className="py-4 text-sm text-primary-600 dark:text-primary-400">
                    €400
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Septiembre 2024
                  </td>
                  <td className="py-4 text-sm text-success-600 dark:text-success-400">
                    €4,500
                  </td>
                  <td className="py-4 text-sm text-danger-600 dark:text-danger-400">
                    €4,100
                  </td>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    €400
                  </td>
                  <td className="py-4 text-sm text-primary-600 dark:text-primary-400">
                    €400
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Agosto 2024
                  </td>
                  <td className="py-4 text-sm text-success-600 dark:text-success-400">
                    €4,200
                  </td>
                  <td className="py-4 text-sm text-danger-600 dark:text-danger-400">
                    €3,800
                  </td>
                  <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                    €400
                  </td>
                  <td className="py-4 text-sm text-primary-600 dark:text-primary-400">
                    €400
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <!-- Goals Section --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- Savings Goal --> */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Meta de Ahorro Mensual
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Progreso</span>
              <span className="font-medium text-gray-900 dark:text-white">
                €325 / €500
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-primary-600 h-2 rounded-full w-[65%]"></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Te faltan €175 para alcanzar tu meta mensual
            </p>
          </div>
        </div>

        {/* <!-- Budget Goal --> */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Presupuesto Mensual
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Gastado</span>
              <span className="font-medium text-gray-900 dark:text-white">
                €3,975 / €4,000
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-warning-500 h-2 rounded-full w-[99.4%]"></div>
            </div>
            <p className="text-sm text-warning-600 dark:text-warning-400">
              ¡Cuidado! Solo te quedan €25 en tu presupuesto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
