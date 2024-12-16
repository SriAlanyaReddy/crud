const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/employeeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connection established successfully");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});


// Schema and Model
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: Number, required: true, unique: true },
    Department: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Role: { type: String, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);

// Route to create a new employee
app.post('/employeescreate', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json({ message: "Created successfully", newEmployee });
    } catch (err) {
        res.status(400).json({ message: "Error", error: err.message });
    }
});
app.get('/viewEmployees', async (req, res) => {
    try {
        const employees = await Employee.find();  // Assuming Employee is the Mongoose model
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: "Error fetching employees", error: err.message });
    }
});
// Delete an employee
app.delete('/deleteEmployee/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Employee.findByIdAndDelete(id);
        res.status(200).send('Employee deleted');
    } catch (err) {
        res.status(500).json({ message: 'Error deleting employee', error: err.message });
    }
});
// Update an employee's details
app.put('/updateEmployee/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, position } = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { name, age, position },
            { new: true } // return the updated employee
        );
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(500).json({ message: 'Error updating employee', error: err.message });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
