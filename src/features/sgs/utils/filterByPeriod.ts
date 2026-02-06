import { Period, SelicPoint } from "../types";

export function filterByPeriod(data: SelicPoint[], period: Period): SelicPoint[] {
  if (!data.length) return [];

  const end = data[data.length - 1].date; // usa a última data disponível (evita futuro)
  const start = new Date(end);

  if (period === "7d") start.setDate(start.getDate() - 7);
  if (period === "30d") start.setDate(start.getDate() - 30);
  if (period === "3m") start.setMonth(start.getMonth() - 3);
  if (period === "1y") start.setFullYear(start.getFullYear() - 1);

  return data.filter((p) => p.date >= start && p.date <= end);
}
