"use client";

import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Transaction {
  id: number;
  date: Date;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}

interface ExportButtonsProps {
  transactions: Transaction[];
}

export function ExportButtons({ transactions }: ExportButtonsProps) {
  const exportToCSV = () => {
    const headers = ["Fecha", "Descripción", "Categoría", "Tipo", "Monto"];
    const csvContent = [
      headers.join(","),
      ...transactions.map((t) =>
        [
          t.date,
          `"${t.description}"`,
          `"${t.category}"`,
          t.type === "income" ? "Ingreso" : "Gasto",
          t.amount,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `transacciones_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = () => {
    // Simple PDF export simulation
    // In a real app, you'd use a library like jsPDF
    const content = transactions
      .map(
        (t) =>
          `${t.date} | ${t.description} | ${t.category} | ${
            t.type === "income" ? "Ingreso" : "Gasto"
          } | $${Math.abs(t.amount)}`
      )
      .join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `transacciones_${new Date().toISOString().split("T")[0]}.txt`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Exportar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={exportToCSV}>
          <FileText className="w-4 h-4 mr-2" />
          Exportar a CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToPDF}>
          <FileText className="w-4 h-4 mr-2" />
          Exportar a PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
