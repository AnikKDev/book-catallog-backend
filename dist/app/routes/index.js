"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("../modules/auth/auth.router");
const book_router_1 = require("../modules/book/book.router");
const category_router_1 = require("../modules/category/category.router");
const orders_router_1 = require("../modules/orders/orders.router");
const users_router_1 = require("../modules/users/users.router");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: "/auth",
        route: auth_router_1.authRouter,
    },
    {
        path: "/users",
        route: users_router_1.userRouter,
    },
    {
        path: "/categories",
        route: category_router_1.categoryRouter,
    },
    {
        path: "/books",
        route: book_router_1.bookRouter,
    },
    {
        path: "/orders",
        route: orders_router_1.orderRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
