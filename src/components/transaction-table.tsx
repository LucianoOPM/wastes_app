"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Transaction {
  id: number;
  date: Date;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold text-gray-900">Fecha</TableHead>
            <TableHead className="font-semibold text-gray-900">
              Descripción
            </TableHead>
            <TableHead className="font-semibold text-gray-900">
              Categoría
            </TableHead>
            <TableHead className="font-semibold text-gray-900 text-right">
              Monto
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="hover:bg-gray-50">
              <TableCell className="font-medium text-gray-600">
                {new Date(transaction.date).toLocaleDateString("es-ES")}
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {transaction.description}
              </TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={`${
                    transaction.type === "income"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {transaction.category}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-semibold">
                <span
                  className={
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {transaction.type === "income" ? "+" : ""}$
                  {Math.abs(transaction.amount).toLocaleString()}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
