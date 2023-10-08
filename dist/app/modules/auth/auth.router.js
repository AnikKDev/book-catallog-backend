"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const router = (0, express_1.Router)();
// user routes
router.post("/signup", (0, validateRequest_1.default)(auth_validation_1.authValidation.create), auth_controller_1.authController.insertIntoDB);
router.post("/signin", (0, validateRequest_1.default)(auth_validation_1.authValidation.signin), auth_controller_1.authController.userLogin);
exports.authRouter = router;
