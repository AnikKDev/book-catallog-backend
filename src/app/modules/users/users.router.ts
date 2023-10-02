import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { usersController } from "./users.controller";
import { usersValidation } from "./users.validation";

const router: Router = Router();
// user routes
router.post(
  "/",
  validateRequest(usersValidation.create),
  usersController.insertIntoDB
);

export const userRouter = router;
