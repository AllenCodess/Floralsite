import Product from "../models/productModel.js";
import { getAccessToken } from "../utils/paypal.js";

// Works out the real total from the database
const calcTotal = async (items) => {
  let total = 0;
  for (const item of items) {
    const product = await Product.findById(item.id);
    if (!product) throw new Error("Product not found");

    let price = product.price;
    if (item.size) {
      const size = product.sizes.find((s) => s.label === item.size);
      if (!size) throw new Error("Size not found");
      price = size.price;
    }
    total += price * item.quantity;
  }
  return total;
};

export const createOrder = async (req, res) => {
  try {
    const total = await calcTotal(req.body.items);
    const token = await getAccessToken();

    const response = await fetch(`${process.env.PAYPAL_API_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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
    const token = await getAccessToken();

    const response = await fetch(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders/${req.params.id}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    if (data.status !== "COMPLETED") {
      return res.status(400).json({ message: "Payment not completed" });
    }

    // Payment worked: save your order here
    // const order = await Order.create({ ...req.body, paypalOrderId: data.id, isPaid: true });

    res.status(201).json({ message: "Payment successful", paypalOrderId: data.id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
