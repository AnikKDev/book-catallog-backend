import express from "express";
import { authRouter } from "../modules/auth/auth.router";
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
