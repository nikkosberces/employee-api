import Employee from "../models/Employee.js";

async function getEmployees(req, res) {
  Employee.find({}).then((employees) => {
    res.status(200).json(employees);
  });
}

async function createEmployee(req, res) {
  res.send("Employee Resource");
}

async function updateEmployee(req, res) {
  res.send("Employee has been created");
}
async function deleteEmployee(req, res) {
  res.send("Employee has been deleted");
}

export default {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
