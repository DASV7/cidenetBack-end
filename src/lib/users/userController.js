const Employee = require("../../models/employees")
const { sections } = require("../../utils/queryOptions")

/**
  @param {Object} param query options previously validate in Front-end
*/
const createNewUser = async (req, res) => {
    try {
        const existUser = await Employee.find({ number_document: req.body.number_document })
        if (existUser && existUser.length) throw new Error("El numero de documento ya se encuentra registrado")
        const employees = new Employee({ ...req.body })
        const employeeNew = await employees.save()
        res.status(200).json({ information: employeeNew, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};


/**
  @param {Object} param query options filters by users
*/
const getAllEmployees = async (req, res) => {
    try {
        const { page, limit } = req.query
        const employees = await Employee.find({})
            .skip((page || 0) * (limit || 10))
            .limit(10)

        res.status(200).json({ information: employees, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};

const getEmployeesByFilter = async (req, res) => {
    try {
        const { page, limit } = req.query
        const filter = {}
        Object.keys(req.body).forEach(key => {
            if (req.body[key]) filter[key] = sections[key](req.body[key])
        })
        const employees = await Employee.find(filter)
            .skip((page || 0) * (limit || 10))
            .limit(10)

        res.status(200).json({ information: employees, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};

/**
  @param {Object} param query options for update user by id
*/
const editUserById = async (req, res) => {
    try {
        const existUser = await Employee.find({ number_document: req.body.number_document, _id: { $ne: req.body._id } })
        if (existUser && existUser.length) {
            throw new Error("El numero de documento ya se encuentra registrado")
        }
        const id = req.body._id
        delete req.body._id
        const editUser = await Employee.updateOne({ _id: id }, req.body)
        res.status(200).json({ information: { _id: id, ...req.body }, error: false });
    } catch (err) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }

};


/**
  @param {Object} param query option _id user For delete
*/
const deleteEmployee = async (req, res) => {
    try {
        const { _id } = req.body
        const deleteUser = await Employee.deleteOne({ _id })
        res.status(200).json({ information: deleteUser, error: false });
    } catch (error) {
        console.log("Papá a Buscar el error", err.message)
        res.status(500).json({ message: err.message, error: true });
    }
}


module.exports = { createNewUser, getAllEmployees, editUserById, deleteEmployee, getEmployeesByFilter }