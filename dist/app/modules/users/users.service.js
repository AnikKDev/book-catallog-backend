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
exports.usersService = void 0;
const omitFields_1 = require("../../../utils/omitFields");
const prisma_1 = __importDefault(require("../../../utils/prisma"));
// get all users
// TODO: have to add paginations
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findMany({
        include: {
            orders: true,
            reviewAndRatings: true,
        },
    });
    const usersWithoutPass = (0, omitFields_1.omitFields)(result, ["password"]);
    return usersWithoutPass;
});
// get single user
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
        include: {
            orders: true,
            reviewAndRatings: true,
        },
    });
    const userWithoutPass = (0, omitFields_1.omitField)(result, ["password"]);
    return userWithoutPass;
});
// update single user
const updateSingleUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.user.update({
        where: {
            id,
        },
        data,
    });
});
// delete single user
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.user.delete({
        where: {
            id,
        },
    });
});
exports.usersService = {
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
};
