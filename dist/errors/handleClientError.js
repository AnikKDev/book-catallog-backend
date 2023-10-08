"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const handleClientError = (error) => {
    var _a;
    let errors = [];
    let message = "";
    let statusCode = 400;
    if (error.code === "P2025") {
        message = ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || "Record not found!";
        errors = [
            {
                path: "",
                message,
            },
        ];
    }
    else if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002") {
        statusCode = http_status_1.default.CONFLICT;
        message = `Duplicate field: ${error.meta ? error.meta.target.join(",") : "Something went wrong"}`;
        errors = [
            {
                path: "",
                message,
            },
        ];
    }
    else if (error.code === "P2003") {
        if (error.message.includes("delete()` invocation:")) {
            message = "Delete failed";
            errors = [
                {
                    path: "",
                    message,
                },
            ];
        }
    }
    return {
        statusCode,
        message,
        errorMessages: errors,
    };
};
exports.default = handleClientError;
//"//\nInvalid `prisma.semesterRegistration.delete()` invocation:\n\n\nAn operation failed because it depends on one or more records that were required but not found. Record to delete does not exist.",
