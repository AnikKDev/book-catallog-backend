"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingFilters = exports.bookRelationalFieldsMapper = exports.bookRelationalFields = exports.bookSearchableFields = exports.booksFilters = void 0;
exports.booksFilters = [
    "search",
    "category",
    "maxPrice",
    "minPrice",
    "genre",
];
exports.bookSearchableFields = ["category", "title", "genre"];
exports.bookRelationalFields = ["category"];
exports.bookRelationalFieldsMapper = {
    category: "category",
};
exports.pricingFilters = ["maxPrice", "minPrice"];
