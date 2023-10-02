import express from "express";
import { userRouter } from "../modules/users/users.router";

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/users",
    route: userRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;