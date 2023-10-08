"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const book_constant_1 = require("./book.constant");
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.createBook(data);
    return result;
});
// TODO: have to add paginations
const getAllBooks = (paginationOptions, filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = filters, otherFilterOptions = __rest(filters, ["search"]);
    const { limit, page, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const andCondition = [];
    // can search in category and title
    if (search) {
        andCondition.push({
            OR: book_constant_1.bookSearchableFields.map(data => {
                if (book_constant_1.bookRelationalFields.includes(data)) {
                    return {
                        [book_constant_1.bookRelationalFieldsMapper[data]]: {
                            title: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    };
                }
                else {
                    return {
                        [data]: {
                            contains: search,
                            mode: "insensitive",
                        },
                    };
                }
            }),
        });
    }
    // can filter in category, title, max and min price and genre
    if (Object.keys(otherFilterOptions).length > 0) {
        andCondition.push({
            AND: Object.keys(filters).map(key => {
                if (book_constant_1.bookRelationalFields.includes(key)) {
                    return {
                        [book_constant_1.bookRelationalFieldsMapper[key]]: {
                            title: filters[key],
                        },
                    };
                }
                if (book_constant_1.pricingFilters.includes(key)) {
                    if (key === "maxPrice") {
                        return {
                            price: {
                                lt: Number(filters[key]),
                            },
                        };
                    }
                    if (key === "minPrice") {
                        return {
                            price: {
                                gt: Number(filters[key]),
                            },
                        };
                    }
                }
                else {
                    return {
                        [key]: {
                            equals: filters[key],
                        },
                    };
                }
            }),
        });
    }
    const whereCondition = andCondition.length > 0 ? { AND: andCondition } : {};
    const result = yield prisma_1.default.book.findMany({
        include: {
            category: true,
            reviewAndRatings: true,
        },
        where: whereCondition,
        skip,
        take: limit,
        orderBy: sortBy && sortOrder
            ? {
                [sortBy]: sortOrder,
            }
            : {
                title: "desc",
            },
    });
    return result;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
            reviewAndRatings: true,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Book not found with this id.");
    }
    return result;
});
const updateSingleBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
const deleteSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return result;
});
// other filters
// get books by category
const getBooksByCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany({
        where: {
            categoryId,
        },
        include: {
            category: true,
            reviewAndRatings: true,
        },
    });
    return result;
});
exports.bookService = {
    insertIntoDB,
    getAllBooks,
    getSingleBook,
    updateSingleBook,
    deleteSingleBook,
    getBooksByCategory,
};
