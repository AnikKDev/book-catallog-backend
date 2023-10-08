"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ required_error: "Name is not provided" })
            .min(3, "Name field must be atleast 3 characters"),
        email: zod_1.z
            .string({ required_error: "Email is not provided" })
            .email({ message: "Please provide a valid email address" }),
        role: zod_1.z.enum(["customer", "admin"]).default("customer"),
        contactNo: zod_1.z.string({ required_error: "Contact No is not provided" }),
        address: zod_1.z.string({ required_error: "Address is not provided" }),
        profileImg: zod_1.z.string({ required_error: "profileimg is not provided" }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ required_error: "Name is not provided" })
            .min(3, "Name field must be atleast 3 characters")
            .optional(),
        email: zod_1.z
            .string({ required_error: "Email is not provided" })
            .email({ message: "Please provide a valid email address" })
            .optional(),
        role: zod_1.z.enum(["customer", "admin"]).default("customer").optional(),
        contactNo: zod_1.z
            .string({ required_error: "Contact No is not provided" })
            .optional(),
        address: zod_1.z.string({ required_error: "Address is not provided" }).optional(),
        profileImg: zod_1.z
            .string({ required_error: "profileimg is not provided" })
            .optional(),
    }),
});
exports.usersValidation = {
    create,
    update,
};
