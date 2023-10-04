import { PrismaClient } from "@prisma/client";
import httpStatus from "http-status";
import { UserSignupData } from "../app/modules/users/users.interface";
import ApiError from "../errors/ApiError";
import { omitField } from "./omitFields";
import { passwordEncryption } from "./passwordEncryption";
const prisma = new PrismaClient({
  errorFormat: "pretty",
}).$extends({
  model: {
    user: {
      async signUp(userData: UserSignupData) {
        const { password: inputPassword, ...userInputData } = userData;
        const hashedPassword = passwordEncryption.hashPassword(inputPassword);
        const result = await prisma.user.create({
          data: {
            ...userInputData,
            password: hashedPassword,
          },
        });
        if (!result) {
          throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            "Error creating the user"
          );
        }
        const userWithoutPass = omitField(result, ["password"]);
        return userWithoutPass;
      },
    },
    book: {
      async createBook(bookData: any) {
        const { publicationDate, ...otherBookData } = bookData;
        const result = await prisma.book.create({
          data: {
            ...otherBookData,
            publicationDate: new Date(publicationDate),
          },
        });
        if (!result) {
          throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            "Error creating the book"
          );
        }
        return result;
      },
    },
  },
});

export default prisma;
