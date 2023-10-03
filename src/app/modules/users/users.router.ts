import { Router } from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { usersController } from "./users.controller";

const router: Router = Router();
// user routes
router.get("/", auth(ENUM_USER_ROLE.ADMIN), usersController.getAllUsers);

export const userRouter = router;
