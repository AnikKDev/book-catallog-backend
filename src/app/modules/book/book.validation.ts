import { z } from "zod";

const create = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Name is not provided" })
      .min(3, "Name field must be atleast 3 characters"),
    author: z.string({ required_error: "Author is not provided" }),
    price: z.number({ required_error: "Price is not provided" }),
    genre: z.string({ required_error: "Genre is not provided" }),
    publicationDate: z.string({
      required_error: "Publication date is not provided",
    }),
    categoryId: z.string({ required_error: "Category Id is not provided" }),
  }),
});
const update = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Name is not provided" })
      .min(3, "Name field must be atleast 3 characters")
      .optional(),
    author: z.string({ required_error: "Author is not provided" }).optional(),
    price: z.number({ required_error: "Price is not provided" }).optional(),
    genre: z.string({ required_error: "Genre is not provided" }).optional(),
    publicationDate: z
      .string({ required_error: "Publication date is not provided" })
      .optional(),
    categoryId: z
      .string({ required_error: "Category Id is not provided" })
      .optional(),
  }),
});

export const bookValidation = {
  create,
  update,
};
