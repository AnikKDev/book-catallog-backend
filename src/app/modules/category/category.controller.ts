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
const getAllCategories = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await cateogryService.getAllCategories();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Categories fetched successfully",
      data: result,
    });
  }
);
const getSingleCategory = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await cateogryService.getSingleCategory(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Category fetched successfully",
      data: result,
    });
  }
);

export const categoryController = {
  insertIntoDB,
  getAllCategories,
  getSingleCategory,
};
