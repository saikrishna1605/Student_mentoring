document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    slider.addEventListener('click', () => toggleSlider());
});

// Function to toggle between Parent and Student mode
function toggleSlider() {
    const sliderButton = document.querySelector('.slider-button');
    const nameText = document.getElementById("name");

    if (sliderButton.style.left === '0px' || sliderButton.style.left === '') {
        sliderButton.style.left = '100px';
        changeContent("Student");
        document.getElementById("the_user").innerHTML = `
            <div class="input-field">
                <input type="text" placeholder="Email" id="Email">
            </div>
            <div class="input-field">
                <input type="password" placeholder="Password" id="Password">
            </div>
            <button class="next-btn" onclick="authenticateStudent()">Login</button>`;
    } else {
        sliderButton.style.left = '0px';
        changeContent("Parent");
        document.getElementById("the_user").innerHTML = `
            <div class="input-field">
                <input type="text" placeholder="Student roll number" id="rollNumber">
            </div>
            <button type="button" class="search-btn" onclick="fetchStudentDetails()">Search</button>
            <div id="details" class="details">
                <p><strong>Name:</strong> </p>
                <p><strong>Department:</strong> </p>
                <p><strong>Roll Number:</strong> </p>
            </div>`;
    }
}

// Function to change role text
function changeContent(role) {
    document.getElementById("name").innerHTML = role;
}

// **Fetch student details using roll number (for Parent mode)**
async function fetchStudentDetails() {
    const rollNumber = document.getElementById('rollNumber').value;

    if (!rollNumber) {
        alert("Please enter a roll number");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/student/${rollNumber}`);
        const data = await response.json();

        if (response.status === 404) {
            document.getElementById('details').innerHTML = `<p style="color: red;">Student not found</p>`;
            return;
        }

        // Display student details in the "details" div
        document.getElementById('details').innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Department:</strong> ${data.department}</p>
            <p><strong>Roll Number:</strong> ${data.rollNumber}</p>
        `;

        // Store student data in session storage for later use
        sessionStorage.setItem('studentData', JSON.stringify(data));
    } catch (error) {
        console.error("Error fetching student data:", error);
        document.getElementById('details').innerHTML = `<p style="color: red;">Error fetching data</p>`;
    }
}

// **Authenticate student login (for Student mode)**
async function authenticateStudent() {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    if (!email || !password) {
        alert("Please enter both Email and Password");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Store student info and redirect
            sessionStorage.setItem("studentData", JSON.stringify(data));
            window.location.replace("/Student_mentoring/publicparent/p.html"); // Redirect to Student page
        } else {
            alert("Invalid Email or Password");
        }
    } catch (error) {
        console.error("Error authenticating student:", error);
        alert("Error connecting to the server");
    }
}

// **Ensure going back redirects to login page instead of previous session**
window.onload = function () {
    if (window.location.pathname.includes("p.html")) {
        window.history.pushState(null, null, "/Student_mentoring/publiclogin/login.html");
    }
};
