import express from "express";

const employeeRouter = express.Router();

employeeRouter.get("/", (req, res) => {
  res.send("Employee resource");
});

export default employeeRouter;
