import React from "react";
import { Calendar, Download, FileText, Filter } from "lucide-react";

export default function Reportes() {
  return (
    <div className="space-y-6">
      {/* <!-- Header --> */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Reportes Financieros
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Genera y exporta reportes detallados de tu actividad financiera
          </p>
        </div>
      </div>

      {/* <!-- Report Options --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Monthly Report --> */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Reporte Mensual
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Resumen completo del mes
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white">
              <option>Enero 2025</option>
              <option>Diciembre 2024</option>
              <option>Noviembre 2024</option>
              <option>Octubre 2024</option>
            </select>
            <div className="flex space-x-2">
              <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                PDF
              </button>
              <button className="flex-1 bg-success-600 hover:bg-success-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Excel
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Annual Report --> */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-success-50 dark:bg-success-900/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-success-600 dark:text-success-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Reporte Anual
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Análisis completo del año
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white">
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <div className="flex space-x-2">
              <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                PDF
              </button>
              <button className="flex-1 bg-success-600 hover:bg-success-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Excel
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Custom Report --> */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
              <Filter className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Reporte Personalizado
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Crea tu reporte a medida
              </p>
            </div>
          </div>
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
            Configurar Reporte
          </button>
        </div>
      </div>

      {/* <!-- Recent Reports --> */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Reportes Recientes
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Reporte Mensual - Enero 2025
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Generado el 15 de enero, 2025
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 p-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success-100 dark:bg-success-900/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-success-600 dark:text-success-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Reporte Anual - 2024
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Generado el 2 de enero, 2025
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 p-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Gastos por Categoría - Q4 2024
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Generado el 28 de diciembre, 2024
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 p-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Report Templates --> */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Plantillas de Reportes
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Análisis de Gastos
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Desglose detallado por categorías con gráficos comparativos
              </p>
              <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                Usar Plantilla
              </button>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Progreso de Ahorro
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Seguimiento de metas de ahorro y evolución mensual
              </p>
              <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                Usar Plantilla
              </button>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Balance Trimestral
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Comparativa trimestral de ingresos vs gastos
              </p>
              <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                Usar Plantilla
              </button>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Reporte Fiscal
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Resumen anual para declaración de impuestos
              </p>
              <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                Usar Plantilla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
