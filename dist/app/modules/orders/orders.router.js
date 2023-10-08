"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const orders_controller_1 = require("./orders.controller");
const router = (0, express_1.Router)();
router.get("/", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), orders_controller_1.ordersController.getAllOrders);
router.get("/my-orders", (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), orders_controller_1.ordersController.getAllOrdersForUser);
router.get("/:orderId", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), orders_controller_1.ordersController.getOrderDetails);
router.post("/create-order", 
//   validateRequest(orderValidation.create),
(0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), orders_controller_1.ordersController.insertIntoDB);
// other router
exports.orderRouter = router;
