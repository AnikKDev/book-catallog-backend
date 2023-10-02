import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { authService } from "./auth.service";

const insertIntoDB = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await authService.insertIntoDB(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User created successfully",
      data: result,
    });
  }
);
const userLogin = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await authService.login(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User loggedin successfully",
      data: result,
    });
  }
);

export const authController = {
  insertIntoDB,
  userLogin,
};
