import { User } from "@prisma/client";
import httpStatus from "http-status";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { passwordEncryption } from "../../../utils/passwordEncryption";
import prisma from "../../../utils/prisma";
import { UserLoginData } from "./auth.interface";

const insertIntoDB = async (data: User) => {
  /*  const { password: inputPassword, ...userInputData } = data;
  const hashedPassword = passwordEncryption.hashPassword(inputPassword); */

  const result = await prisma.user.signUp(data);
  // const { password, ...otherData } = result;
  return result;
};

/* const insertIntoDB = async (data: User) => {
  const { password: inputPassword, ...userInputData } = data;
  const hashedPassword = passwordEncryption.hashPassword(inputPassword);

  const result = await prisma.user.create({
    data: {
      ...userInputData,
      password: hashedPassword,
    },
    include: {
      orders: true,
      reviewAndRatings: true,
    },
  });
  const { password, ...otherData } = result;
  return otherData;
}; */

const login = async (data: UserLoginData) => {
  const { password: inputPassword, email } = data;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!isUserExist) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      `User not found with the email id of: ${email}`
    );
  }
  const decryptedPassword = passwordEncryption.comparePassword(
    inputPassword,
    isUserExist.password
  );
  if (!decryptedPassword) {
    throw new ApiError(
      httpStatus.NOT_ACCEPTABLE,
      "Email or Password is incorrect"
    );
  }
  const generatedToken = jwtHelpers.createToken(
    {
      role: isUserExist.role,
      userId: isUserExist.id,
    },
    config.jwt.secret as string,
    config.jwt.expires_in as string
  );
  return { token: generatedToken };
};

export const authService = {
  insertIntoDB,
  login,
};
