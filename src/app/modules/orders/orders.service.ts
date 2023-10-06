import { Order } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../utils/prisma";

const insertIntoDB = async (data: any): Promise<Order> => {
  const result = await prisma.order.create({
    data,
  });
  return result;
};

const getAllOrders = async (): Promise<Partial<Order>[]> => {
  const result = await prisma.order.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

const getAllOrderForUser = async (userId: string): Promise<Order[] | null> => {
  const result = await prisma.order.findMany({
    where: {
      userId,
    },
  });
  return result;
};

const getOrderDetails = async (
  userId: string,
  orderId: string
): Promise<Order | null> => {
  const isValidUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  const result = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  if (isValidUser?.role !== "admin") {
    if (isValidUser?.id !== result?.userId) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized to access this data."
      );
    }
  }
  return result;
};
export const ordersService = {
  getAllOrderForUser,
  insertIntoDB,
  getAllOrders,
  getOrderDetails,
};
