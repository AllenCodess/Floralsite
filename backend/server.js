import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const port = process.env.PORT;
const DB = process.env.DATABASE;
const app = express();
import productRoute from "./../backend/routes/productRoute.js";
import orderRoute from "./../backend/routes/orderRoute.js";
import paypalRoutes from "./routes/paypalRoutes.js";

app.use(express.json());
app.set("json spaces", 2);

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
  }
};

connectDB();

app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/paypal", paypalRoutes);

app.listen(port, () => {
  console.log(`app running on port from the env file ${port}`);
});
