"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const users_controller_1 = require("./users.controller");
const users_validation_1 = require("./users.validation");
const router = (0, express_1.Router)();
// get api's
router.get("/", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), users_controller_1.usersController.getAllUsers);
router.get("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), users_controller_1.usersController.getSingleUser);
// patch api's
router.patch("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(users_validation_1.usersValidation.update), users_controller_1.usersController.updateSingleUser);
// delete api's
router.delete("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), users_controller_1.usersController.deleteSingleUser);
exports.userRouter = router;
