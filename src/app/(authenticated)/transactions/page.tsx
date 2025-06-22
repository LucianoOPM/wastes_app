import React from "react";
import { Plus, Search } from "lucide-react";

export default function Transactions() {
  return (
    <div className="space-y-6">
      {/* <!-- Header --> */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Transacciones
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gestiona todos tus ingresos y gastos
          </p>
        </div>
        <button
          id="add-transaction-btn"
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 w-fit"
        >
          <Plus className="w-5 h-5" />
          <span>Nueva Transacción</span>
        </button>
      </div>

      {/* <!-- Filters --> */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* <!-- Search --> */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar transacciones..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              id="search-input"
            />
          </div>

          {/* <!-- Category Filter --> */}
          <select
            id="category-filter"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Todas las categorías</option>
            <option value="Alimentación">Alimentación</option>
            <option value="Transporte">Transporte</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Compras">Compras</option>
            <option value="Salud">Salud</option>
            <option value="Salario">Salario</option>
            <option value="Freelance">Freelance</option>
            <option value="Otros">Otros</option>
          </select>

          {/* <!-- Type Filter --> */}
          <select
            id="type-filter"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Todos los tipos</option>
            <option value="income">Ingresos</option>
            <option value="expense">Gastos</option>
          </select>

          {/* <!-- Date Filter --> */}
          <input
            type="month"
            id="date-filter"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* <!-- Summary Cards --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Ingresos
          </h3>
          <p
            className="text-2xl font-bold text-success-600 dark:text-success-400"
            id="total-income"
          >
            €0
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Gastos
          </h3>
          <p
            className="text-2xl font-bold text-danger-600 dark:text-danger-400"
            id="total-expenses"
          >
            €0
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Balance
          </h3>
          <p
            className="text-2xl font-bold text-gray-900 dark:text-white"
            id="balance"
          >
            €0
          </p>
        </div>
      </div>

      {/* <!-- Transactions List --> */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Lista de Transacciones
          </h3>
        </div>
        <div className="p-6">
          <div id="transactions-list" className="space-y-4">
            {/* <!-- Transactions will be loaded here --> */}
          </div>

          {/* <!-- Empty state --> */}
          <div id="empty-state" className="text-center py-12 hidden">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No se encontraron transacciones
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
