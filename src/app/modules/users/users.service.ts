import { User } from "@prisma/client";
import { omitFields } from "../../../utils/omitFields";
import prisma from "../../../utils/prisma";

// get all users
const getAllUsers = async (): Promise<Partial<User>[]> => {
  const result = await prisma.user.findMany({
    include: {
      orders: true,
      reviewAndRatings: true,
    },
  });
  const usersWithoutPass = omitFields(result, ["password"]);
  return usersWithoutPass;
};

export const usersService = {
  getAllUsers,
};
