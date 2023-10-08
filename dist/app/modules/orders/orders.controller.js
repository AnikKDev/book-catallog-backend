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
exports.ordersController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const orders_service_1 = require("./orders.service");
const insertIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedinUserData = jwtHelpers_1.jwtHelpers.verifyToken(req.headers.authorization, config_1.default.jwt.secret);
    const orderCreationData = Object.assign(Object.assign({}, req.body), { userId: loggedinUserData.userId });
    const result = yield orders_service_1.ordersService.insertIntoDB(orderCreationData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "book created successfully",
        data: result,
    });
}));
const getAllOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_service_1.ordersService.getAllOrders();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Orders fetched successfully",
        data: result,
    });
}));
const getAllOrdersForUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedinUserData = jwtHelpers_1.jwtHelpers.verifyToken(req.headers.authorization, config_1.default.jwt.secret);
    const result = yield orders_service_1.ordersService.getAllOrderForUser(loggedinUserData.userId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Orders fetched successfully",
        data: result,
    });
}));
const getOrderDetails = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedinUserData = jwtHelpers_1.jwtHelpers.verifyToken(req.headers.authorization, config_1.default.jwt.secret);
    const result = yield orders_service_1.ordersService.getOrderDetails(loggedinUserData.userId, req.params.orderId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Order fetched successfully",
        data: result,
    });
}));
exports.ordersController = {
    insertIntoDB,
    getAllOrders,
    getAllOrdersForUser,
    getOrderDetails,
};
