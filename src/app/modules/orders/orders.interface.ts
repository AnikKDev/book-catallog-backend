export type OrderData = {
  userId: string;
  orderedBooks: {
    bookId: string;
    quantity: number;
  };
  status: "pending" | "shipped" | "delivered";
};
