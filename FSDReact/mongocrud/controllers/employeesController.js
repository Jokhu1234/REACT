/*const data = {
    employees: require('../model/employees.json'),
    setEmployees: function (data) { this.employees = data }
}
*/
const Employee = require('../model/Employee');
const getAllEmployees = async (req, res) => {
    const employee = await Employee.find();
    if(!employee) return res.Status(204).json({ "message": 'Employee not found'});
    res.json(employees);
    //res.json(data.employees);
}

const createNewEmployee = async (req, res) => {
    /*const newEmployee = {
        id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
        */

    //if (!newEmployee.firstname || !newEmployee.lastname)
      if(!req?.body?.firstname || !req?.body?.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    //data.setEmployees([...data.employees, newEmployee]);
   
    try {
        const result = await Employee.create({
            firtname: req.body.firstname,
            lastname: req.body.lastname
        });
        res.status(201).json(data.employees);
    }
    catch(err) {
        console.log(err);
    }
}

const updateEmployee = async (req, res) => {
    //const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    const employee = await Employee.findOne({_id : req.bodyt.id}).exec();
    /*if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
        */
    if (!employee) {
        return res.status(204).json ({"message" : `Employee ID ${req.body.id} not found`});
    }
    if (req.body.firstname) employee.firstname = req.body.firstname;
    if (req.body.lastname) employee.lastname = req.body.lastname;
    //const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    //const unsortedArray = [...filteredArray, employee];
    //data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    const result = await employee.save();
    res.json(result);
}

const deleteEmployee = async (req, res) => {
    //const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    const employee = await Employee.findOne({_id : req.body.id}).exec();
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    //const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    //data.setEmployees([...filteredArray]);
    const result = await employee.deleteOne();
    res.json(result);
}

const getEmployee = async (req, res) => {
    //const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));
    const employee = await Employee.findOne({_id : req.body.id}).exec();

    //if (!employee) 
     if (!req?.body?.id) {
        return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
    }
    res.json(employee);
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}