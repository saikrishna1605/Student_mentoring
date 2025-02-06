// server.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require('Student_mentoring/nodes.js');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'test@000', // Use a strong secret for production
    resave: false,
    saveUninitialized: true
}));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myserver', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to MongoDB");
});

// Serve static files (like CSS, JS)
app.use(express.static('public'));

// Routes

// Render login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'Student_mentoring/publiclogin/login.html');
});

// Handle login post request
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database
        const user = await User.findOne({ username });

        if (!user) {
            return res.send('Invalid username or password');
        }

        // Compare passwords
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.send('Invalid username or password');
        }

        // Create a session
        req.session.userId = user._id;

        // Redirect to another page (e.g., dashboard)
        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Dashboard page (for logged-in users)
app.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/');
    }

    res.send('<h1>Welcome to your dashboard</h1>');
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Logout failed');
        }
        res.redirect('/');
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



  