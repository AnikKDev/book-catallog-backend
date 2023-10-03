import { Category } from "@prisma/client";
import prisma from "../../../utils/prisma";

const insertIntoDB = (data: Category): Promise<Category> => {
  const result = prisma.category.create({
    data,
  });
  return result;
};

export const cateogryService = {
  insertIntoDB,
};
