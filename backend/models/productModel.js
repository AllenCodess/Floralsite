import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  image: { type: String, required: [true, "A product needs a image"] },
  description: {
    type: String,
    required: [true, "Aproduct must have a description"],
  },
  arrangement: {
    type: String,
    required: [true, "A product must have a arrangement for product details"],
  },
  color: {
    type: String,
    required: [true, "A product must have a color for product details"],
  },
  occasion: {
    type: String,
    required: [true, "A product must have a occasion for product details"],
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
