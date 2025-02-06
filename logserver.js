const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const PORT = 3000;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = "Saikrishna";

// Middleware to serve static files from your public folder
app.use(express.static(path.join('C:/Users/saikr/Downloads/Student_Mentor/publiclogin')));

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("Could not connect to MongoDB", err);
    }
}

// Route to get student details by roll number
app.get('/college/student/:rollNumber', async (req, res) => {
    try {
        const rollNumber = req.params.rollNumber;
        const db = client.db(dbName);
        const collection = db.collection("students");

        // Find student document by roll number
        const student = await collection.findOne(
            { roll_number: rollNumber },
            { projection: { student_name: 1, department: 1, section: 1 } }
        );
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving student data", error });
    }
});

// Start the server and connect to the database
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
