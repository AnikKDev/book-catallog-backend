"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ required_error: "Name is not provided" })
            .min(3, "Name field must be atleast 3 characters")
            .trim(),
        email: zod_1.z
            .string({ required_error: "Email is not provided" })
            .email({ message: "Please provide a valid email address" })
            .trim(),
        password: zod_1.z.string({ required_error: "Password is not provided" }).trim(),
        role: zod_1.z.enum(["customer", "admin"]).default("customer"),
        contactNo: zod_1.z
            .string({ required_error: "Contact No is not provided" })
            .trim(),
        address: zod_1.z.string({ required_error: "Address is not provided" }).trim(),
        profileImg: zod_1.z
            .string({ required_error: "profileimg is not provided" })
            .trim(),
    }),
});
const signin = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({ required_error: "Email is not provided" })
            .email({ message: "Please provide a valid email address" })
            .trim(),
        password: zod_1.z.string({ required_error: "Password is not provided" }).trim(),
    }),
});
exports.authValidation = {
    create,
    signin,
};
