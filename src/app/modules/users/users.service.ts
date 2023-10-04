import { User } from "@prisma/client";
import { omitField, omitFields } from "../../../utils/omitFields";
import prisma from "../../../utils/prisma";

// get all users
// TODO: have to add paginations
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
// update single user
const updateSingleUser = async (
  id: string,
  data: Partial<User>
): Promise<void> => {
  await prisma.user.update({
    where: {
      id,
    },
    data,
  });
};
// delete single user
const deleteSingleUser = async (id: string): Promise<void> => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
};

export const usersService = {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
