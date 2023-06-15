import Express from "express";
import adminUserController from "../controller/adminUserController.js";

const adminUserRouter = Express.Router();

adminUserRouter.get("/", adminUserController.createAdminUser);

export default adminUserRouter;
