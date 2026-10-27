import Order from "./../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({ status: "success", data: { order: newOrder } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};
