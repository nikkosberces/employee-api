import Employee from "../models/Employee.js";
import isString from "../utils/isString.js";

async function getEmployees(_req, res) {
  const employees = await Employee.find({});

  return res.json(employees);
}

async function getEmployee(req, res, next) {
  try {
    const id = req.params.id;
    const employee = await Employee.findById(id);

    if (employee) return res.json(employee);

    return res.json({ error: "Employee not found" });
  } catch (error) {
    next(error);
  }
}

async function createEmployee(req, res, next) {
  try {
    const { employee_id_number, employee_name } = req.body;

    if (employee_name == undefined || employee_id_number === undefined) {
      return res.status(400).json({ error: "Content is missing" });
    }

    const employeeExist = await Employee.findOne({ employee_name });

    if (employeeExist)
      return res.status(400).json({ error: "Employee already exists" });

    if (employee_name === "" || employee_id_number === "")
      return res.status(400).json({ error: "Name and Id number are required" });

    if (
      isString(employee_name) === false ||
      isString(employee_id_number) === false
    ) {
      return res.status(400).json({ error: "Name and number must be strings" });
    }

    const employee = new Employee({
      employee_id_number,
      employee_name,
    });

    const savedEmployee = await employee.save();

    return res.status(201).json(savedEmployee);
  } catch (error) {
    next(error);
  }
}

async function updateEmployee(req, res, next) {
  const id = req.params.id;
  const { employee_id_number, employee_name } = req.body;

  const employee = {
    employee_id_number,
    employee_name,
  };

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, employee, {
      new: true,
      runValidators: true,
      context: "query",
    });

    return res.json(updateEmployee);
  } catch (error) {
    next(error);
  }
}

async function deleteEmployee(req, res, next) {
  try {
    const id = req.params.id;
    await Employee.findByIdAndDelete(id);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

export default {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
