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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const passwordEncryption_1 = require("../../../utils/passwordEncryption");
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.signUp(data);
    return result;
});
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { password: inputPassword, email } = data;
    const isUserExist = yield prisma_1.default.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, `User not found with the email id of: ${email}`);
    }
    const decryptedPassword = passwordEncryption_1.passwordEncryption.comparePassword(inputPassword, isUserExist.password);
    if (!decryptedPassword) {
        throw new ApiError_1.default(http_status_1.default.NOT_ACCEPTABLE, "Email or Password is incorrect");
    }
    const generatedToken = jwtHelpers_1.jwtHelpers.createToken({
        role: isUserExist.role,
        userId: isUserExist.id,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return { token: generatedToken };
});
exports.authService = {
    insertIntoDB,
    login,
};
