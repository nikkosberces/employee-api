import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";

const app = express();

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (error) {
    console.log(`Error connecting to the DB: ${error}`);
  }
}

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

export default app;
