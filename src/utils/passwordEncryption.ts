import { compareSync, hashSync } from "bcrypt";
import config from "../config";

const hashPassword = (password: string): string => {
  try {
    const encryptedPassword = hashSync(
      password,
      Number(config.bycrypt_salt_rounds) as number
    );
    return encryptedPassword;
  } catch (error) {
    throw new Error("error hashing password");
  }
};

const comparePassword = (
  inputPassword: string,
  dbPassword: string
): boolean => {
  try {
    const comparePassword = compareSync(inputPassword, dbPassword);
    return comparePassword;
  } catch (error) {
    throw new Error("error comparing hashed password");
  }
};

export const passwordEncryption = {
  hashPassword,
  comparePassword,
};
