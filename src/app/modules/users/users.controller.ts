import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { usersService } from "./users.service";

const insertIntoDB = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    console.log("meow");
    const result = await usersService.insertIntoDB(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User created successfully",
      data: result,
    });
  }
);

export const usersController = {
  insertIntoDB,
};
