import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
