import mongoose from "mongoose";

const SIZE_LABELS = ["Small", "Medium", "Large", "Extra Large"];

const sizeSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      enum: SIZE_LABELS,
      required: [true, "A size needs a label"],
    },
    price: {
      type: Number,
      min: [0, "Price can't be negative"],
      required: [true, "A size needs a price"],
    },
  },
  { _id: false },
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
    },
    price: {
      type: Number,
      min: [0, "Price can't be negative"],
      required: [
        function () {
          return this.sizes.length === 0;
        },
        "A product must have a price or sizes",
      ],
    },
    sizes: [sizeSchema],
    image: { type: String, required: [true, "A product needs an image"] },
    description: {
      type: String,
      required: [true, "A product must have a description"],
    },
    arrangement: {
      type: String,
      required: [true, "A product must have an arrangement for product details"],
    },
    color: {
      type: String,
      required: [true, "A product must have a color for product details"],
    },
    occasion: {
      type: String,
      required: [true, "A product must have an occasion for product details"],
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);
export default Product;
