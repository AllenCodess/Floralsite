import express from "express";
const router = express.Router();

import { createOrder, getOrders } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/add").post(createOrder);
router.route("/").get(protect, getOrders);

export default router;
