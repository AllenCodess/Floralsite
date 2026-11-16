import express from "express";
const router = express.Router();

import { getOrders } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getOrders);

export default router;
