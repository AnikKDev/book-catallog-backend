import { Order } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ordersService } from "./orders.service";

const insertIntoDB = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const loggedinUserData = jwtHelpers.verifyToken(
      req.headers.authorization as string,
      config.jwt.secret as string
    );
    const orderCreationData: Order = {
      ...req.body,
      userId: loggedinUserData.userId,
    };
    const result = await ordersService.insertIntoDB(orderCreationData);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "book created successfully",
      data: result,
    });
  }
);
export const ordersController = {
  insertIntoDB,
};
