import { z } from "zod";

const create = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is not provided" })
      .min(3, "Name field must be atleast 3 characters"),
    email: z
      .string({ required_error: "Email is not provided" })
      .email({ message: "Please provide a valid email address" }),
    role: z.enum(["customer", "admin"]).default("customer"),
    contactNo: z.string({ required_error: "Contact No is not provided" }),
    address: z.string({ required_error: "Address is not provided" }),
    profileImg: z.string({ required_error: "profileimg is not provided" }),
  }),
});

export const usersValidation = {
  create,
};
