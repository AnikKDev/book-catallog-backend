"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({ required_error: "Name is not provided" })
            .min(3, "Name field must be atleast 3 characters"),
        author: zod_1.z.string({ required_error: "Author is not provided" }),
        price: zod_1.z.number({ required_error: "Price is not provided" }),
        genre: zod_1.z.string({ required_error: "Genre is not provided" }),
        publicationDate: zod_1.z.string({
            required_error: "Publication date is not provided",
        }),
        categoryId: zod_1.z.string({ required_error: "Category Id is not provided" }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({ required_error: "Name is not provided" })
            .min(3, "Name field must be atleast 3 characters")
            .optional(),
        author: zod_1.z.string({ required_error: "Author is not provided" }).optional(),
        price: zod_1.z.number({ required_error: "Price is not provided" }).optional(),
        genre: zod_1.z.string({ required_error: "Genre is not provided" }).optional(),
        publicationDate: zod_1.z
            .string({ required_error: "Publication date is not provided" })
            .optional(),
        categoryId: zod_1.z
            .string({ required_error: "Category Id is not provided" })
            .optional(),
    }),
});
exports.bookValidation = {
    create,
    update,
};
