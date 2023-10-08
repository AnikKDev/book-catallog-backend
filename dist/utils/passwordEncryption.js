"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordEncryption = void 0;
const bcrypt_1 = require("bcrypt");
const config_1 = __importDefault(require("../config"));
const hashPassword = (password) => {
    try {
        const encryptedPassword = (0, bcrypt_1.hashSync)(password, Number(config_1.default.bycrypt_salt_rounds));
        return encryptedPassword;
    }
    catch (error) {
        throw new Error("error hashing password");
    }
};
const comparePassword = (inputPassword, dbPassword) => {
    try {
        const comparePassword = (0, bcrypt_1.compareSync)(inputPassword, dbPassword);
        return comparePassword;
    }
    catch (error) {
        throw new Error("error comparing hashed password");
    }
};
exports.passwordEncryption = {
    hashPassword,
    comparePassword,
};
