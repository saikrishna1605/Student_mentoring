// Function to fetch student details using roll number
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

// Function to authenticate student login
async function authenticateStudent(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

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
            window.location.replace("/p.html"); // Redirect to Student page
        } else {
            alert("Invalid Email or Password");
        }
    } catch (error) {
        console.error("Error authenticating student:", error);
        alert("Error connecting to the server");
    }
}

// Ensure going back redirects to login page instead of previous session
window.onload = function () {
    if (window.location.pathname.includes("p.html")) {
        window.history.pushState(null, null, "/Student_mentoring/publiclogin/login.html");
    }
};