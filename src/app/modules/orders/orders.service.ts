import { Order } from "@prisma/client";
import prisma from "../../../utils/prisma";

const insertIntoDB = async (data: any): Promise<Order> => {
  const result = await prisma.order.create({
    data,
  });
  return result;
};
export const ordersService = {
  insertIntoDB,
};
