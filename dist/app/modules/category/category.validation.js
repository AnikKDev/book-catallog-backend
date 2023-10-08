"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({ required_error: "Title is not provided" })
            .min(3, "Title field must be atleast 3 characters"),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({ required_error: "Title is not provided" })
            .min(3, "Title field must be atleast 3 characters")
            .optional(),
    }),
});
exports.categoryValidation = {
    create,
    update,
};
