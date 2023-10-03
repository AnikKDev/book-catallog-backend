import { Category } from "@prisma/client";
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

export const cateogryService = {
  insertIntoDB,
  getAllCategories,
};
