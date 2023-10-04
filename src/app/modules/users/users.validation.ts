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
const update = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is not provided" })
      .min(3, "Name field must be atleast 3 characters")
      .optional(),
    email: z
      .string({ required_error: "Email is not provided" })
      .email({ message: "Please provide a valid email address" })
      .optional(),
    role: z.enum(["customer", "admin"]).default("customer").optional(),
    contactNo: z
      .string({ required_error: "Contact No is not provided" })
      .optional(),
    address: z.string({ required_error: "Address is not provided" }).optional(),
    profileImg: z
      .string({ required_error: "profileimg is not provided" })
      .optional(),
  }),
});

export const usersValidation = {
  create,
  update,
};
