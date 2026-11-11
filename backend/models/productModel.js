import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
  label: { type: String, required: [true, "A size needs a label"] },
  price: { type: Number, required: [true, "A size needs a price"] },
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  price: {
    type: Number,
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
});

const Product = mongoose.model("Product", productSchema);
export default Product;
