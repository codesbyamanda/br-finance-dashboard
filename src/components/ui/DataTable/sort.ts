import { SortState } from "./types";

export function sortData<T>(
  data: T[],
  sort: SortState<T> | null
): T[] {
  if (!sort) return data;

  const { key, direction } = sort;

  return [...data].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (aValue instanceof Date && bValue instanceof Date) {
      return direction === "asc"
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc"
        ? aValue - bValue
        : bValue - aValue;
    }

    return 0;
  });
}
