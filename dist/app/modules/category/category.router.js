"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validation_1 = require("./category.validation");
const router = (0, express_1.Router)();
router.get("/", category_controller_1.categoryController.getAllCategories);
router.post("/create-category", (0, validateRequest_1.default)(category_validation_1.categoryValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.categoryController.insertIntoDB);
router.get("/:id", category_controller_1.categoryController.getSingleCategory);
router.patch("/:id", (0, validateRequest_1.default)(category_validation_1.categoryValidation.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.categoryController.updateSingleCategory);
router.delete("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.categoryController.deleteSingleCategory);
exports.categoryRouter = router;
