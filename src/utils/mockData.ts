// Mock data for the application
export const mockTransactions = [
  {
    id: "1",
    description: "Salario mensual",
    amount: 3500,
    type: "income" as const,
    category: "Salario",
    date: new Date("2025-01-01"),
  },
  {
    id: "2",
    description: "Supermercado",
    amount: -120,
    type: "expense" as const,
    category: "Alimentación",
    date: new Date("2025-01-02"),
  },
  {
    id: "3",
    description: "Gasolina",
    amount: -80,
    type: "expense" as const,
    category: "Transporte",
    date: new Date("2025-01-03"),
  },
  {
    id: "4",
    description: "Cine",
    amount: -25,
    type: "expense" as const,
    category: "Entretenimiento",
    date: new Date("2025-01-04"),
  },
  {
    id: "5",
    description: "Freelance proyecto",
    amount: 800,
    type: "income" as const,
    category: "Freelance",
    date: new Date("2025-01-05"),
  },
  {
    id: "6",
    description: "Compra ropa",
    amount: -150,
    type: "expense" as const,
    category: "Compras",
    date: new Date("2025-01-06"),
  },
];

export const mockExpensesByCategory = [
  { name: "Alimentación", value: 450, color: "#ef4444" },
  { name: "Transporte", value: 280, color: "#f97316" },
  { name: "Entretenimiento", value: 120, color: "#eab308" },
  { name: "Compras", value: 320, color: "#06b6d4" },
  { name: "Salud", value: 80, color: "#8b5cf6" },
  { name: "Otros", value: 150, color: "#64748b" },
];

export const mockIncomeExpenseData = [
  { month: "Ago", income: 4200, expense: 3800 },
  { month: "Sep", income: 4500, expense: 4100 },
  { month: "Oct", income: 4300, expense: 3900 },
  { month: "Nov", income: 4800, expense: 4200 },
  { month: "Dic", income: 5200, expense: 4800 },
  { month: "Ene", income: 4300, expense: 3975 },
];

export const mockCategories = [
  {
    id: "1",
    name: "Alimentación",
    icon: "🍽️",
    color: "#ef4444",
    isDefault: true,
  },
  {
    id: "2",
    name: "Transporte",
    icon: "🚗",
    color: "#f97316",
    isDefault: true,
  },
  {
    id: "3",
    name: "Entretenimiento",
    icon: "🎬",
    color: "#eab308",
    isDefault: true,
  },
  { id: "4", name: "Compras", icon: "🛍️", color: "#06b6d4", isDefault: true },
  { id: "5", name: "Salud", icon: "🏥", color: "#8b5cf6", isDefault: true },
  { id: "6", name: "Salario", icon: "💼", color: "#22c55e", isDefault: true },
  { id: "7", name: "Inversión", icon: "📈", color: "#10b981", isDefault: true },
  { id: "8", name: "Freelance", icon: "💻", color: "#3b82f6", isDefault: true },
  { id: "9", name: "Otros", icon: "📦", color: "#64748b", isDefault: true },
];

export const mockUserProfile = {
  name: "Juan Pérez",
  email: "juan.perez@email.com",
  phone: "+34 123 456 789",
  currency: "EUR",
  language: "es",
  notifications: {
    email: true,
    push: false,
    monthly: true,
    weekly: false,
  },
  goals: {
    monthlyBudget: 2000,
    savingsGoal: 500,
  },
};
