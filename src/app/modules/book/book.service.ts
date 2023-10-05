import { Book } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../utils/prisma";

const insertIntoDB = async (data: Book): Promise<Book> => {
  const result = await prisma.book.createBook(data);
  return result;
};

// TODO: have to add paginations
const getAllBooks = async (): Promise<Partial<Book>[]> => {
  const result = await prisma.book.findMany({
    include: {
      category: true,
      reviewAndRatings: true,
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
