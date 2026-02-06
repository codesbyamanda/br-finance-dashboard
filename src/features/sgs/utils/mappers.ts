import { SgsApiItem, SelicPoint } from "../types";

export function mapSgsToPoints(data: SgsApiItem[]): SelicPoint[] {
  return data.map((item) => {
    const [day, month, year] = item.data.split("/").map(Number);

    return {
      date: new Date(year, month - 1, day),
      value: Number(item.valor),
    };
  });
}
