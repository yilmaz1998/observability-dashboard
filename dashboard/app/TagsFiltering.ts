export function filterByTags<T extends { tags: Record<string, string> }>(
  data: T[],
  activeFilters: Record<string, string>
): T[] {
  if (Object.keys(activeFilters).length === 0) return data;

  return data.filter((item) =>
    Object.entries(activeFilters).every(
      ([key, value]) => item.tags[key] === value
    )
  );
}