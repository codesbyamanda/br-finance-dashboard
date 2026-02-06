export function paginate<T>(
  data: T[],
  page: number,
  pageSize: number
) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    pageData: data.slice(start, end),
    totalPages: Math.ceil(data.length / pageSize),
  };
}
