import express from "express";
const router = express.Router();
import { getAllProducts, createProduct } from "./../controllers/productController.js";

router.route("/all").get(getAllProducts);
router.route("/add").post(createProduct);

export default router;
