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
exports.ordersService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.create({
        data,
    });
    return result;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany({
        include: {
            user: true,
        },
    });
    return result;
});
const getAllOrderForUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany({
        where: {
            userId,
        },
    });
    return result;
});
const getOrderDetails = (userId, orderId) => __awaiter(void 0, void 0, void 0, function* () {
    const isValidUser = yield prisma_1.default.user.findUnique({
        where: {
            id: userId,
        },
    });
    const result = yield prisma_1.default.order.findUnique({
        where: {
            id: orderId,
        },
    });
    if ((isValidUser === null || isValidUser === void 0 ? void 0 : isValidUser.role) !== "admin") {
        if ((isValidUser === null || isValidUser === void 0 ? void 0 : isValidUser.id) !== (result === null || result === void 0 ? void 0 : result.userId)) {
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized to access this data.");
        }
    }
    return result;
});
exports.ordersService = {
    getAllOrderForUser,
    insertIntoDB,
    getAllOrders,
    getOrderDetails,
};
