import { User } from "@prisma/client";
import prisma from "../../../utils/prisma";

const insertIntoDB = async (data: User) => {
  const result = await prisma.user.create({
    data,
    include: {
      orders: true,
      reviewAndRatings: true,
    },
  });
  const { password, ...otherData } = result;
  return otherData;
};

export const usersService = {
  insertIntoDB,
};
