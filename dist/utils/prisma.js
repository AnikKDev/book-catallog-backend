"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const omitFields_1 = require("./omitFields");
const passwordEncryption_1 = require("./passwordEncryption");
const prisma = new client_1.PrismaClient({
    errorFormat: "pretty",
}).$extends({
    model: {
        user: {
            signUp(userData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const { password: inputPassword } = userData, userInputData = __rest(userData, ["password"]);
                    const hashedPassword = passwordEncryption_1.passwordEncryption.hashPassword(inputPassword);
                    const result = yield prisma.user.create({
                        data: Object.assign(Object.assign({}, userInputData), { password: hashedPassword }),
                    });
                    if (!result) {
                        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Error creating the user");
                    }
                    const userWithoutPass = (0, omitFields_1.omitField)(result, ["password"]);
                    return userWithoutPass;
                });
            },
        },
        book: {
            createBook(bookData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const { publicationDate } = bookData, otherBookData = __rest(bookData, ["publicationDate"]);
                    const result = yield prisma.book.create({
                        data: Object.assign(Object.assign({}, otherBookData), { publicationDate: new Date(publicationDate) }),
                    });
                    if (!result) {
                        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Error creating the book");
                    }
                    return result;
                });
            },
        },
    },
});
exports.default = prisma;
