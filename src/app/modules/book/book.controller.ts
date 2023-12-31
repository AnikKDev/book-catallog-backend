import { Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../utils/catchAsync";
import pick from "../../../utils/pick";
import sendResponse from "../../../utils/sendResponse";
import { booksFilters } from "./book.constant";
import { bookService } from "./book.service";

const insertIntoDB = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await bookService.insertIntoDB(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "book created successfully",
      data: result,
    });
  }
);
const getAllbooks = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    // pagination options
    const paginationOptions = pick(req.query, paginationFields);
    const filters = pick(req.query, booksFilters);
    const result = await bookService.getAllBooks(paginationOptions, filters);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "books fetched successfully",
      data: result,
    });
  }
);
const getSinglebook = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await bookService.getSingleBook(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "book fetched successfully",
      data: result,
    });
  }
);
const updateSinglebook = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await bookService.updateSingleBook(req.params.id, req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "book updated successfully",
      data: result,
    });
  }
);
const deleteSinglebook = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await bookService.deleteSingleBook(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "book deleted successfully",
      data: result,
    });
  }
);

// other filters

const getBooksByCategory = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const result = await bookService.getBooksByCategory(req.params.categoryId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: `books fetched successfully for the category of ${req.params.categoryId}`,
      data: result,
    });
  }
);

export const bookController = {
  insertIntoDB,
  getAllbooks,
  getSinglebook,
  updateSinglebook,
  deleteSinglebook,

  getBooksByCategory,
};
