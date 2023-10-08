export const booksFilters: string[] = [
  "search",
  "category",
  "maxPrice",
  "minPrice",
  "genre",
];
export const bookSearchableFields = ["category", "title", "genre"];

export const bookRelationalFields: string[] = ["category"];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
  category: "category",
};
export const pricingFilters: string[] = ["maxPrice", "minPrice"];
