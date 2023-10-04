import { Router } from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { bookController } from "./book.controller";
import { bookValidation } from "./book.validation";

const router = Router();
router.get("/", bookController.getAllbooks);

router.post(
  "/create-book",
  validateRequest(bookValidation.create),
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.insertIntoDB
);

router.get("/:id", bookController.getSinglebook);

router.patch(
  "/:id",
  validateRequest(bookValidation.update),
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.updateSinglebook
);
router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.deleteSinglebook
);

// other router
router.get("/:categoryId/category", bookController.getBooksByCategory);
export const bookRouter = router;
