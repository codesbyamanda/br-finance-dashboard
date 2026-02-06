import { SelicPoint } from "../types";

export function getLastValue(data: SelicPoint[]): number {
  return data[data.length - 1]?.value ?? 0;
}

export function getAverageValue(data: SelicPoint[]): number {
  if (!data.length) return 0;

  const sum = data.reduce((acc, item) => acc + item.value, 0);
  return sum / data.length;
}

export function getVariation(data: SelicPoint[]): number {
  if (data.length < 2) return 0;

  const first = data[0].value;
  const last = data[data.length - 1].value;

  return last - first;
}
