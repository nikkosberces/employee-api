import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
});

export default User;
