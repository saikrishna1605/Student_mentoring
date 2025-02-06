require("dotenv").config();
const mongoose = require("mongoose");

// MongoDB Connection URI (Update if needed)
const MONGO_URI =  "mongodb://localhost:27017/test";

// Define Student Schema
const StudentSchema = new mongoose.Schema({
    rollNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true } // Hashed password
});

// Create Model
const Student = mongoose.model("student", StudentSchema);

// Connect to MongoDB and Fetch Data
async function fetchStudents() {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Retrieve All Students
        const students = await Student.find({}, { password: 0 }); // Exclude passwords
        console.log("Student Data:", students);

        // Close the connection
        await mongoose.connection.close();
        console.log("MongoDB connection closed.");
    } catch (error) {
        console.error("Error fetching students:", error);
    }
}

// Run the function
fetchStudents();
