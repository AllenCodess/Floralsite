import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Order must have a first name"],
    },
    lastName: {
      type: String,
      required: [true, "Order must have a last name"],
    },
    email: {
      type: String,
      required: [true, "Order must have an email"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Order must have a phone number"],
    },
    deliveryDate: {
      type: Date,
      required: [true, "Order must have a delivery date"],
    },
    deliveryInstructions: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Order must have an address"],
    },
    city: {
      type: String,
      required: [true, "Order must have a city"],
    },
    postalCode: {
      type: String,
      required: [true, "Order must have a postal code"],
    },
    items: {
      type: [
        {
          product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
          name: { type: String, required: true },
          size: { type: String },
          price: { type: Number, required: true },
          quantity: { type: Number, required: true },
        },
      ],
      validate: {
        validator: (items) => items.length > 0,
        message: "Order must have at least one item",
      },
    },
    total: {
      type: Number,
      required: [true, "Order must have a total"],
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    paymentResult: {
      id: String,
      status: String,
      email_address: String,
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
