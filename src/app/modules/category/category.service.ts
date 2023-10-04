import { Category } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../utils/prisma";

const insertIntoDB = (data: Category): Promise<Category> => {
  const result = prisma.category.create({
    data,
  });
  return result;
};

// TODO: have to add paginations
const getAllCategories = async (): Promise<Partial<Category>[]> => {
  const result = await prisma.category.findMany({
    include: {
      books: true,
    },
  });
  return result;
};

const getSingleCategory = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });
  if (!result) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Category not found with this id."
    );
  }
  return result;
};

const updateSingleCategory = async (
  id: string,
  data: Partial<Category>
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteSingleCategory = async (id: string): Promise<Category> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const cateogryService = {
  insertIntoDB,
  getAllCategories,
  getSingleCategory,
  updateSingleCategory,
  deleteSingleCategory,
};
