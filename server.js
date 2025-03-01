const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from frontend

// Serve static files from the "publicparent" directory
app.use(express.static(path.join(__dirname, 'publicparent')));

// Connect to MongoDB (Make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Define Student Schema
const studentSchema = new mongoose.Schema({
    rollNumber: String,
    name: String,
    department: String,
    section: String,
    email: String,
    password: String // In a real application, passwords should be hashed
});

const Student = mongoose.model('Student', studentSchema);

// Define Mentor Schema
const mentorSchema = new mongoose.Schema({
    name: String,
    id: String,
    email: String,
    department: String,
    password: String // In a real application, passwords should be hashed
});

const Mentor = mongoose.model('Mentor', mentorSchema);

// API endpoint to fetch student details by roll number
app.get('/student/:rollNumber', async (req, res) => {
    try {
        const student = await Student.findOne({ rollNumber: req.params.rollNumber });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// API endpoint to authenticate student login
app.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    try {
        const student = await Student.findOne({ email, password });
        if (!student) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// API endpoint to authenticate mentor login
app.post('/authenticate-mentor', async (req, res) => {
    const { email, password } = req.body;
    try {
        const mentor = await Mentor.findOne({ email, password });
        if (!mentor) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }
        res.json(mentor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Serve the p.html file for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'publicparent', 'p.html'));
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));