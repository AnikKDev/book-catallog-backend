import express from "express";
import { authRouter } from "../modules/auth/auth.router";
import { bookRouter } from "../modules/book/book.router";
import { categoryRouter } from "../modules/category/category.router";
import { userRouter } from "../modules/users/users.router";

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/categories",
    route: categoryRouter,
  },
  {
    path: "/books",
    route: bookRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
