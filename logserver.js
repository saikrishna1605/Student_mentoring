// // const express = require('express');
// // const { MongoClient } = require('mongodb');
// // const path = require('path');
// // const app = express();
// // const PORT = 3000;

// // const uri = "mongodb://localhost:27017";
// // const client = new MongoClient(uri);
// // const dbName = "Saikrishna";

// // // Middleware to serve static files from your public folder
// // app.use(express.static(path.join('C:/Users/saikr/Downloads/Student_Mentor/publiclogin')));

// // // Connect to MongoDB
// // async function connectDB() {
// //     try {
// //         await client.connect();
// //         console.log("Connected to MongoDB!");
// //     } catch (err) {
// //         console.error("Could not connect to MongoDB", err);
// //     }
// // }

// // // Route to get student details by roll number
// // app.get('/college/student/:rollNumber', async (req, res) => {
// //     try {
// //         const rollNumber = req.params.rollNumber;
// //         const db = client.db(dbName);
// //         const collection = db.collection("students");

// //         // Find student document by roll number
// //         const student = await collection.findOne(
// //             { roll_number: rollNumber },
// //             { projection: { student_name: 1, department: 1, section: 1 } }
// //         );
// //         if (student) {
// //             res.status(200).json(student);
// //         } else {
// //             res.status(404).json({ message: "Student not found" });
// //         }
// //     } catch (error) {
// //         res.status(500).json({ message: "Error retrieving student data", error });
// //     }
// // });

// // // Start the server and connect to the database
// // app.listen(PORT, () => {
// //     connectDB();
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });








// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const User = require('Student_mentoring/nodes.js');

// const app = express();

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'test@000', // Use a strong secret for production
//     resave: false,
//     saveUninitialized: true
// }));

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/myserver', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("Connected to MongoDB");
// });

// // Serve static files (like CSS, JS)
// app.use(express.static('public'));

// // Routes

// // Render login page
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + 'Student_mentoring/publiclogin/login.html');
// });

// // Handle login post request
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Find the user in the database
//         const user = await User.findOne({ username });

//         if (!user) {
//             return res.send('Invalid username or password');
//         }

//         // Compare passwords
//         const isMatch = await user.comparePassword(password);

//         if (!isMatch) {
//             return res.send('Invalid username or password');
//         }

//         // Create a session
//         req.session.userId = user._id;

//         // Redirect to another page (e.g., dashboard)
//         res.redirect('/dashboard');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server error');
//     }
// });

// // Dashboard page (for logged-in users)
// app.get('/dashboard', (req, res) => {
//     if (!req.session.userId) {
//         return res.redirect('/');
//     }

//     res.send('<h1>Welcome to your dashboard</h1>');
// });

// // Logout route
// app.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             return res.status(500).send('Logout failed');
//         }
//         res.redirect('/');
//     });
// });

// // Start server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });



  



const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/myserver"; // Replace 'myDatabase' with your DB name

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

module.exports = mongoose;






