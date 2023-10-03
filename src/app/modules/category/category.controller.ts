import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { cateogryService } from "./category.service";

const insertIntoDB = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await cateogryService.insertIntoDB(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Category created successfully",
      data: result,
    });
  }
);

export const categoryController = {
  insertIntoDB,
};
