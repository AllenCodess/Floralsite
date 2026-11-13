import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import { getAccessToken } from "../utils/paypal.js";

// Looks up real prices and builds the items to save
const buildItems = async (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Cart is empty");
  }

  let total = 0;
  const orderItems = [];

  for (const item of items) {
    const quantity = Number(item.quantity);
    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new Error("Invalid quantity");
    }

    const product = await Product.findById(item._id);
    if (!product) throw new Error("Product not found");

    let price = product.price;
    if (item.size) {
      const size = product.sizes.find((s) => s.label === item.size);
      if (!size) throw new Error("Size not found");
      price = size.price;
    }

    total += price * quantity;
    orderItems.push({
      product: product._id,
      name: product.name,
      size: item.size,
      price,
      quantity,
    });
  }

  return { orderItems, total };
};

const paypalFetch = async (path, method = "GET") => {
  const token = await getAccessToken();
  const res = await fetch(`${process.env.PAYPAL_API_URL}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
  return res.json();
};

export const createOrder = async (req, res) => {
  try {
    const { total } = await buildItems(req.body.items);
    const token = await getAccessToken();

    const response = await fetch(`${process.env.PAYPAL_API_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{ amount: { currency_code: "USD", value: total.toFixed(2) } }],
      }),
    });

    const data = await response.json();
    res.status(200).json({ id: data.id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const captureOrder = async (req, res) => {
  try {
    const { items, ...customer } = req.body;
    const { orderItems, total } = await buildItems(items);

    // 1. Check the form data BEFORE taking any money
    const order = new Order({ ...customer, items: orderItems, total });
    await order.validate();

    // 2. Make sure the PayPal order amount matches the cart
    const paypalOrder = await paypalFetch(`/v2/checkout/orders/${req.params.id}`);
    if (paypalOrder.purchase_units?.[0]?.amount?.value !== total.toFixed(2)) {
      return res.status(400).json({ message: "Payment amount does not match order" });
    }

    // 3. Take the money
    const data = await paypalFetch(`/v2/checkout/orders/${req.params.id}/capture`, "POST");
    if (data.status !== "COMPLETED") {
      return res.status(400).json({ message: "Payment not completed" });
    }

    // 4. Save the order as paid
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: data.id,
      status: data.status,
      email_address: data.payer?.email_address,
    };
    await order.save();

    res.status(201).json({ data: { order } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
