import { z } from "zod";

const create = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Title is not provided" })
      .min(3, "Title field must be atleast 3 characters"),
  }),
});
const update = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Title is not provided" })
      .min(3, "Title field must be atleast 3 characters")
      .optional(),
  }),
});

export const categoryValidation = {
  create,
  update,
};
