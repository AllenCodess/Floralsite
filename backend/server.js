import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
