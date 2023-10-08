import { Book, Prisma } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IPaginationOptions } from "../../../interfaces/pagination.interface";
import prisma from "../../../utils/prisma";
import {
  bookRelationalFields,
  bookRelationalFieldsMapper,
  bookSearchableFields,
  pricingFilters,
} from "./book.constant";
import { IBookFilters } from "./book.interface";

const insertIntoDB = async (data: Book): Promise<Book> => {
  const result = await prisma.book.createBook(data);
  return result;
};

// TODO: have to add paginations
const getAllBooks = async (
  paginationOptions: IPaginationOptions,
  filters: Partial<IBookFilters>
): Promise<Partial<Book>[]> => {
  const { search, ...otherFilterOptions } = filters;
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const andCondition = [];

  // can search in category and title
  if (search) {
    andCondition.push({
      OR: bookSearchableFields.map(data => {
        if (bookRelationalFields.includes(data)) {
          return {
            [bookRelationalFieldsMapper[data]]: {
              title: {
                contains: search,
                mode: "insensitive",
              },
            },
          };
        } else {
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
        if (bookRelationalFields.includes(key)) {
          return {
            [bookRelationalFieldsMapper[key]]: {
              title: (filters as any)[key],
            },
          };
        }
        if (pricingFilters.includes(key)) {
          if (key === "maxPrice") {
            return {
              price: {
                lt: Number((filters as any)[key]),
              },
            };
          }
          if (key === "minPrice") {
            return {
              price: {
                gt: Number((filters as any)[key]),
              },
            };
          }
        } else {
          return {
            [key]: {
              equals: (filters as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereCondition: Prisma.BookWhereInput | Record<string, unknown> =
    andCondition.length > 0 ? { AND: andCondition } : {};
  const result = await prisma.book.findMany({
    include: {
      category: true,
      reviewAndRatings: true,
    },
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            title: "desc",
          },
  });
  return result;
};

const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      reviewAndRatings: true,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Book not found with this id.");
  }
  return result;
};

const updateSingleBook = async (
  id: string,
  data: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteSingleBook = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

// other filters

// get books by category
const getBooksByCategory = async (
  categoryId: string
): Promise<Partial<Book>[]> => {
  const result = await prisma.book.findMany({
    where: {
      categoryId,
    },
    include: {
      category: true,
      reviewAndRatings: true,
    },
  });
  return result;
};

export const bookService = {
  insertIntoDB,
  getAllBooks,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
  getBooksByCategory,
};
