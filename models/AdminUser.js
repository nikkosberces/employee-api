import mongoose from "mongoose";

const adminUserSchema = mongoose.Schema({
  username: String,
  adminname: String,
  passwordHash: String,
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});

adminUserSchema.set("toJSON", {
  transform: (_document, returrnedObject) => {
    returrnedObject.id = returrnedObject._id.String;
    delete returrnedObject._id;
    delete returrnedObject.__v;
    delete returrnedObject.passwordHash;
  },
});

const AdminUSer = mongoose.model("AdminUSer", adminUserSchema);

export default AdminUSer;
