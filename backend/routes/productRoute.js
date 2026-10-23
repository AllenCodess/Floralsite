import express from "express";
const router = express.Router();
import {
  getAllProducts,
  createProduct,
  getOneProduct,
} from "./../controllers/productController.js";

router.route("/all").get(getAllProducts);
router.route("/:id").get(getOneProduct);
router.route("/add").post(createProduct);

export default router;
