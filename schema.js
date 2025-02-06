const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    rollNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true } // Store hashed password for security
});

// Creating a model
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
