export function handlePreviousPage() {
  setOffset((prev) => (prev > 0 ? prev - 20 : prev));
  setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
}

export function handleNextPage() {
  setOffset((prev) => prev + 20);
  setPageNumber((prev) => prev + 1);
}
