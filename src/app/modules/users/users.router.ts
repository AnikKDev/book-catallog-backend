import { Router } from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { usersController } from "./users.controller";

const router: Router = Router();
// get api's
router.get("/", auth(ENUM_USER_ROLE.ADMIN), usersController.getAllUsers);
router.get("/:id", auth(ENUM_USER_ROLE.ADMIN), usersController.getSingleUser);

// patch api's
router.patch(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  usersController.updateSingleUser
);

export const userRouter = router;
