import { Router } from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { ordersController } from "./orders.controller";

const router = Router();
router.get("/", auth(ENUM_USER_ROLE.ADMIN), ordersController.getAllOrders);

router.get(
  "/my-orders",
  auth(ENUM_USER_ROLE.CUSTOMER),
  ordersController.getAllOrdersForUser
);
router.get(
  "/:orderId",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  ordersController.getOrderDetails
);
router.post(
  "/create-order",
  //   validateRequest(orderValidation.create),
  auth(ENUM_USER_ROLE.CUSTOMER),
  ordersController.insertIntoDB
);
// other router
export const orderRouter = router;
