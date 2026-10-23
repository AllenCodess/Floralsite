import Product from "./../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      results: products.length,
      data: products,
    });
  } catch (error) {
    res.status(401).json({ status: "fail", message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ status: "success", data: { product: newProduct } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};
