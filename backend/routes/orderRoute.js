import express from "express";
const router = express.Router();

import { createOrder } from "../controllers/orderController.js";

router.route("/add").post(createOrder);

export default router;
