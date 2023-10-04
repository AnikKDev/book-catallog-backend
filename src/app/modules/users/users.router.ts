import { Router } from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { usersController } from "./users.controller";
import { usersValidation } from "./users.validation";

const router: Router = Router();
// get api's
router.get("/", auth(ENUM_USER_ROLE.ADMIN), usersController.getAllUsers);
router.get("/:id", auth(ENUM_USER_ROLE.ADMIN), usersController.getSingleUser);

// patch api's
router.patch(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(usersValidation.update),
  usersController.updateSingleUser
);

// delete api's
router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  usersController.deleteSingleUser
);

export const userRouter = router;
