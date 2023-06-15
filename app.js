import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import employeeRouter from "./routes/employeeRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import unknownEndpoint from "./middlewares/unknownEndpoint.js";
import adminUserRouter from "./routes/adminUserRouter.js";

const app = express();

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("Connected to DB");
};

connectToDB(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/api/adminUsers", adminUserRouter);
app.use("/api/employees", employeeRouter);
app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
