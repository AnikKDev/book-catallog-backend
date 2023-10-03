import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { usersService } from "./users.service";

const getAllUsers = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await usersService.getAllUsers();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Got all users successfully",
      data: result,
    });
  }
);
const getSingleUser = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await usersService.getSingleUser(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Got the user successfully",
      data: result,
    });
  }
);

export const usersController = {
  getAllUsers,
  getSingleUser,
};
