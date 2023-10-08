"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRole = void 0;
const user_1 = require("../../../enums/user");
exports.userRole = user_1.ENUM_USER_ROLE.ADMIN || user_1.ENUM_USER_ROLE.CUSTOMER;
