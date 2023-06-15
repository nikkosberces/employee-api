import bcrypt from "bcrypt";
import AdminUser from "../models/AdminUser.js";

async function createAdminUser(req, res) {
  const [username, adminname, password] = req.body;
}

export default { createAdminUser };
