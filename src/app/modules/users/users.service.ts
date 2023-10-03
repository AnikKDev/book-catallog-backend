import { User } from "@prisma/client";
import { omitField, omitFields } from "../../../utils/omitFields";
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
// get single user
const getSingleUser = async (id: string): Promise<Partial<User> | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      orders: true,
      reviewAndRatings: true,
    },
  });
  const userWithoutPass = omitField(result, ["password"]);
  return userWithoutPass;
};

export const usersService = {
  getAllUsers,
  getSingleUser,
};
