import { z } from "zod";

const create = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is not provided" })
      .min(3, "Name field must be atleast 3 characters")
      .trim(),
    email: z
      .string({ required_error: "Email is not provided" })
      .email({ message: "Please provide a valid email address" })
      .trim(),
    password: z.string({ required_error: "Password is not provided" }).trim(),
    role: z.enum(["customer", "admin"]).default("customer"),
    contactNo: z
      .string({ required_error: "Contact No is not provided" })
      .trim(),
    address: z.string({ required_error: "Address is not provided" }).trim(),
    profileImg: z
      .string({ required_error: "profileimg is not provided" })
      .trim(),
  }),
});
const signin = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is not provided" })
      .email({ message: "Please provide a valid email address" })
      .trim(),
    password: z.string({ required_error: "Password is not provided" }).trim(),
  }),
});

export const authValidation = {
  create,
  signin,
};
