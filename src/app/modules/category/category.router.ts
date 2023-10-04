import { Router } from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { categoryController } from "./category.controller";
import { categoryValidation } from "./category.validation";

const router = Router();
router.get("/", categoryController.getAllCategories);

router.post(
  "/create-category",
  validateRequest(categoryValidation.create),
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.insertIntoDB
);

router.get("/:id", categoryController.getSingleCategory);

router.patch(
  "/:id",
  validateRequest(categoryValidation.update),
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.updateSingleCategory
);
router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.deleteSingleCategory
);
export const categoryRouter = router;
