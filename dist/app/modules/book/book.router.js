"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const router = (0, express_1.Router)();
router.get("/", book_controller_1.bookController.getAllbooks);
router.post("/create-book", (0, validateRequest_1.default)(book_validation_1.bookValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.bookController.insertIntoDB);
router.get("/:id", book_controller_1.bookController.getSinglebook);
router.patch("/:id", (0, validateRequest_1.default)(book_validation_1.bookValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.bookController.updateSinglebook);
router.delete("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.bookController.deleteSinglebook);
// other router
router.get("/:categoryId/category", book_controller_1.bookController.getBooksByCategory);
exports.bookRouter = router;
