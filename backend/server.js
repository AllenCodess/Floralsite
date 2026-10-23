import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const port = process.env.PORT;
const DB = process.env.DATABASE;
const app = express();
import productRoute from "./../backend/routes/productRoute.js";

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

app.listen(port, () => {
  console.log(`app running on port from the env file ${port}`);
});
