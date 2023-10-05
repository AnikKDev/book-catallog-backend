import { Order } from "@prisma/client";
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
export const ordersService = {
  getAllOrderForUser,
  insertIntoDB,
  getAllOrders,
};
