import { SgsApiItem, SelicPoint } from "./types";

export function mapSgsToPoints(data: SgsApiItem[]): SelicPoint[] {
  return data
    .map((item) => {
      const [dd, mm, yyyy] = item.data.split("/").map(Number);

      return {
        date: new Date(yyyy, mm - 1, dd),
        value: Number(item.valor),
      };
    })
    // garante ordenação crescente
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}
