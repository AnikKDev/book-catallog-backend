import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { authController } from "./auth.controller";
import { authValidation } from "./auth.validation";

const router: Router = Router();
// user routes
router.post(
  "/signup",
  validateRequest(authValidation.create),
  authController.insertIntoDB
);
router.post(
  "/signin",
  validateRequest(authValidation.signin),
  authController.userLogin
);

export const authRouter = router;
