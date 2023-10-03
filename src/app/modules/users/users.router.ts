import { Router } from "express";
import { usersController } from "./users.controller";

const router: Router = Router();
// user routes
router.get("/", usersController.getAllUsers);

export const userRouter = router;
