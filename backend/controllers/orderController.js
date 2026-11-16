import Order from "./../models/orderModel.js";

export const getOrders = async (req, res) => {
  const orders = await Order.find({ isPaid: true }).sort({ createdAt: -1 });
  res.json(orders);
};
