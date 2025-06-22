import React from "react";
import { Plus, Tag } from "lucide-react";

export default function Categories() {
  return (
    <div>
      <div className="space-y-6">
        {/* <!-- Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Gestión de Categorías
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Organiza y personaliza tus categorías de gastos e ingresos
            </p>
          </div>
          <button
            id="add-category-btn"
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 w-fit"
          >
            <Plus className="w-5 h-5" />
            <span>Nueva Categoría</span>
          </button>
        </div>

        {/* <!-- Stats --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Categorías
                </h3>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  9
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-success-50 dark:bg-success-900/20 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-success-600 dark:text-success-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Más Usada
                </h3>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  Alimentación
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Personalizadas
                </h3>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  0
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Categories Grid --> */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Todas las Categorías
            </h3>
          </div>
          <div className="p-6">
            <div
              id="categories-grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {/* <!-- Categories will be loaded here --> */}
            </div>
          </div>
        </div>
      </div>

      <div id="category-modal" className="fixed inset-0 z-50 hidden">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3
                id="modal-title"
                className="text-lg font-semibold text-gray-900 dark:text-white"
              >
                Agregar Categoría
              </h3>
              <button
                id="close-modal"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form id="category-form" className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre de la Categoría
                </label>
                <input
                  type="text"
                  id="category-name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Ej: Mascotas"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Icono
                </label>
                <div className="grid grid-cols-8 gap-2" id="icon-selector">
                  {/* <!-- Icons will be populated here --> */}
                </div>
                <input type="hidden" id="selected-icon" value="📦" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Color
                </label>
                <div className="grid grid-cols-6 gap-2" id="color-selector">
                  {/* <!-- Colors will be populated here --> */}
                </div>
                <input type="hidden" id="selected-color" value="#64748b" />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  id="cancel-btn"
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
