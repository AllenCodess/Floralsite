import "dotenv/config";
import mongoose from "mongoose";
import Admin from "./models/adminModel.js";

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    const exists = await Admin.findOne({ email });
    if (exists) {
      console.log("Admin already exists");
    } else {
      await Admin.create({ email, password });
      console.log("Admin created");
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    await mongoose.disconnect();
  }
};

seedAdmin();
