import Order from "./../models/orderModel.js";
import Product from "./../models/productModel.js";

export const createOrder = async (req, res) => {
  try {
    // 1. Pull out only the fields customers are allowed to send
    const {
      items,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      postalCode,
      deliveryDate,
      deliveryInstructions,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ status: "fail", message: "Cart is empty" });
    }

    // 2. Look up all the products in one query
    const ids = items.map((item) => item._id);
    const products = await Product.find({ _id: { $in: ids } });

    // 3. Build the order items using DATABASE prices
    const orderItems = [];
    for (const item of items) {
      const product = products.find((p) => p._id.toString() === item._id);
      if (!product) {
        return res.status(400).json({ status: "fail", message: "Product not found" });
      }

      const quantity = Number(item.quantity);
      if (!Number.isInteger(quantity) || quantity < 1) {
        return res.status(400).json({ status: "fail", message: "Invalid quantity" });
      }

      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity,
      });
    }

    // 4. Server calculates the total
    const total = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    // 5. Save only what we chose
    const newOrder = await Order.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      postalCode,
      deliveryDate,
      deliveryInstructions,
      items: orderItems,
      total,
      isPaid: false,
    });

    res.status(201).json({ status: "success", data: { order: newOrder } });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};
