import { Router } from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { ordersController } from "./orders.controller";

const router = Router();
// router.get("/", orderController.getAllbooks);

router.post(
  "/create-order",
  //   validateRequest(orderValidation.create),
  auth(ENUM_USER_ROLE.CUSTOMER),
  ordersController.insertIntoDB
);
// other router
export const orderRouter = router;
