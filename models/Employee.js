import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employee_id_number: {
    type: String,
    minLength: 3,
    require: true,
  },
  employee_name: {
    type: String,
    minLength: 8,
    require: true,
  },
  adminUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AdminUSer",
  },
});

employeeSchema.set("toJSON", {
  transform: (_document, returrnedObject) => {
    returrnedObject.id = returrnedObject._id;
    delete returrnedObject._id;
    delete returrnedObject.__v;
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
