import express from "express";
import { authRouter } from "../modules/auth/auth.router";

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/auth",
    route: authRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
