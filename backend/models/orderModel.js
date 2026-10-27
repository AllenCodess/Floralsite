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
      required: [true, "Order must have a email"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Order must have a Phone Number"],
    },
    deliveryDate: {
      type: Date,
      required: [true, "Order must have a Delivery Date"],
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
      required: [true, "Order must have an city"],
    },
    postalCode: {
      type: String,
      required: [true, "Order must have a Postal Code"],
    },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    total: {
      type: Number,
      required: [true, "Order must have a total"],
    },
  },

  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
