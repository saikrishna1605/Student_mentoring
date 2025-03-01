// Function to authenticate mentor login
async function authenticateMentor(event) {
    event.preventDefault();
    const email = document.getElementById("mentor-email").value;
    const password = document.getElementById("mentor-password").value;

    if (!email || !password) {
        alert("Please enter both Email and Password");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/authenticate-mentor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Store mentor info and redirect
            sessionStorage.setItem("mentorData", JSON.stringify(data));
            window.location.replace("/mentor.html"); // Redirect to Mentor Admin page
        } else {
            alert("Invalid Email or Password");
        }
    } catch (error) {
        console.error("Error authenticating mentor:", error);
        alert("Error connecting to the server");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').classList.add('active');
    changeContent('home');
});

const studentData = JSON.parse(sessionStorage.getItem('studentData'));

function changeContent(section) {
    console.log(section);
    // Remove 'active' class from all nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    // Add 'active' class to the clicked link
    document.getElementById(section).classList.add('active');

    // Change the content based on the selected section
    let contentDiv = document.getElementById('content');

    if (section === 'home') {
        // Admin Home Page Template
        contentDiv.innerHTML = `
        <div class="container">
        <!-- Left side: student details -->
        <div class="student-details" id="studentDetails">
            <img src="https://via.placeholder.com/100" alt="Student Image" id="studentImage">
            <p id="studentName">Student Name: N/A</p>
            <p id="studentFatherName">Father Name: N/A</p>
            <p id="studentMotherName">Mother Name: N/A</p>
            <p id="studentFatherMobile">Father Mobile: N/A</p>
            <p id="studentMotherMobile">Mother Mobile: N/A</p>
        </div>

        <!-- Right side: pills with roll numbers -->
        <div class="pill-container" id="pillContainer">
            <!-- Pills will be dynamically generated here -->
        </div>
    </div>`;
    const students = [
        {
        roll: "22B81A0501",
        name: "John Doe",
        fatherName: "Robert Doe",
        motherName: "Jane Doe",
        fatherMobile: "9876543210",
        motherMobile: "9876543220",
        image: "https://via.placeholder.com/100?text=A"
        },
        {
        roll: "22B81A0502",
        name: "Jane Smith",
        fatherName: "Michael Smith",
        motherName: "Linda Smith",
        fatherMobile: "9876543211",
        motherMobile: "9876543221",
        image: "https://via.placeholder.com/100?text=A"
        },
        {
        roll: "22B81A0503",
        name: "Chris Evans",
        fatherName: "Paul Evans",
        motherName: "Susan Evans",
        fatherMobile: "9876543212",
        motherMobile: "9876543222",
        image: "https://via.placeholder.com/100?text=A"
        },
        {
        roll: "22B81A0504",
        name: "Emily Davis",
        fatherName: "Mark Davis",
        motherName: "Rachel Davis",
        fatherMobile: "9876543213",
        motherMobile: "9876543223",
        image: "https://via.placeholder.com/100?text=A"
        },
        {
        roll: "22B81A0505",
        name: "David Johnson",
        fatherName: "James Johnson",
        motherName: "Sarah Johnson",
        fatherMobile: "9876543214",
        motherMobile: "9876543224",
        image: "https://via.placeholder.com/100?text=A"
        },
        {
        roll: "22B81A0506",
        name: "Sophia Williams",
        fatherName: "Joseph Williams",
        motherName: "Angela Williams",
        fatherMobile: "9876543215",
        motherMobile: "9876543225",
        image: "https://via.placeholder.com/100?text=A"
        },
        {
        roll: "22B81A0507",
        name: "Liam Brown",
        fatherName: "Kevin Brown",
        motherName: "Maria Brown",
        fatherMobile: "9876543216",
        motherMobile: "9876543226",
        image: "https://via.placeholder.com/100?text=E"
        },
        {   
        roll: "22B81A0508",
        name: "Olivia Taylor",
        fatherName: "Matthew Taylor",
        motherName: "Emma Taylor",
        fatherMobile: "9876543217",
        motherMobile: "9876543227",
        image: "https://via.placeholder.com/100?text=D"
        },
        {
        roll: "22B81A0509",
        name: "Noah Wilson",
        fatherName: "Andrew Wilson",
        motherName: "Michelle Wilson",
        fatherMobile: "9876543218",
        motherMobile: "9876543228",
        image: "https://via.placeholder.com/100?text=G"
        },
        {
        roll: "22B81A0510",
        name: "Mia Harris",
        fatherName: "Daniel Harris",
        motherName: "Nancy Harris",
        fatherMobile: "9876543219",
        motherMobile: "9876543229",
        image: "https://via.placeholder.com/100?text=H"
        },
        {
        roll: "22B81A0511",
        name: "Ethan Martin",
        fatherName: "Jacob Martin",
        motherName: "Samantha Martin",
        fatherMobile: "9876543230",
        motherMobile: "9876543231",
        image: "https://via.placeholder.com/100?text=I"
        },
        {
        roll: "22B81A0512",
        name: "Ava Thompson",
        fatherName: "Christopher Thompson",
        motherName: "Laura Thompson",
        fatherMobile: "9876543232",
        motherMobile: "9876543233",
        image: "https://via.placeholder.com/100?text=J"
        },
        {
        roll: "22B81A0513",
        name: "William Garcia",
        fatherName: "Jonathan Garcia",
        motherName: "Rebecca Garcia",
        fatherMobile: "9876543234",
        motherMobile: "9876543235",
        image: "https://via.placeholder.com/100?text=K"
        },
        {
        roll: "22B81A0514",
        name: "Isabella Lee",
        fatherName: "David Lee",
        motherName: "Sophia Lee",
        fatherMobile: "9876543236",
        motherMobile: "9876543237",
        image: "https://via.placeholder.com/100?text=L"
        },
        {
        roll: "22B81A0515",
        name: "James Anderson",
        fatherName: "Charles Anderson",
        motherName: "Emily Anderson",
        fatherMobile: "9876543238",
        motherMobile: "9876543239",
        image: "https://via.placeholder.com/100?text=M"
        },
        {   
        roll: "22B81A0516",
        name: "Ella Clark",
        fatherName: "Anthony Clark",
        motherName: "Megan Clark",
        fatherMobile: "9876543240",
        motherMobile: "9876543241",
        image: "https://via.placeholder.com/100?text=N"
        },
        {
        roll: "22B81A0517",
        name: "Lucas White",
        fatherName: "Steven White",
        motherName: "Catherine White",
        fatherMobile: "9876543242",
        motherMobile: "9876543243",
        image: "https://via.placeholder.com/100?text=O"
        },
        {
        roll: "22B81A0518",
        name: "Amelia Hall",
        fatherName: "Peter Hall",
        motherName: "Victoria Hall",
        fatherMobile: "9876543244",
        motherMobile: "9876543245",
        image: "https://via.placeholder.com/100?text=P"
        },
        {
        roll: "22B81A0519",
        name: "Alexander King",
        fatherName: "Philip King",
        motherName: "Isabel King",
        fatherMobile: "9876543246",
        motherMobile: "9876543247",
        image: "https://via.placeholder.com/100?text=Q"
        },
        {
        roll: "22B81A0520",
        name: "Charlotte Scott",
        fatherName: "George Scott",
        motherName: "Diana Scott",
        fatherMobile: "9876543248",
        motherMobile: "9876543249",
        image: "https://via.placeholder.com/100?text=R"
        },
        {
        roll: "22B81A0521",
        name: "Benjamin Young",
        fatherName: "Henry Young",
        motherName: "Julia Young",
        fatherMobile: "9876543250",
        motherMobile: "9876543251",
        image: "https://via.placeholder.com/100?text=S"
        },
        {
        roll: "22B81A0522",
        name: "Grace Wright",
        fatherName: "Ethan Wright",
        motherName: "Chloe Wright",
        fatherMobile: "9876543252",
        motherMobile: "9876543253",
        image: "https://via.placeholder.com/100?text=T"
        }
        ];
    
        // Populate pills dynamically
        const pillContainer = document.getElementById('pillContainer');
        students.forEach((student, index) => {
            const pill = document.createElement('div');
            pill.className = 'pill';
            pill.innerHTML = `${student.roll}`;
            pill.setAttribute('data-index', index);
    
            // Add hover event to show details
            pill.addEventListener('mouseover', function () {
                displayStudentDetails(students[index]);
            });
            
            pillContainer.appendChild(pill);
        });
        pill.addEventListener('mouseover', function () {
            console.log(`Hovered over: ${student.roll}`);
            displayStudentDetails(students[index]);
        });
        function searchStudent(rollNumber) {
            const student = students.find(s => s.roll === rollNumber);
            if (student) {
                displayStudentDetails(student);
            } else {
                document.getElementById('studentDetailsContainer').innerHTML = 'Student not found';
            }
        }
            
        // Function to display student details
        function displayStudentDetails(student) {
            document.getElementById('studentImage').src = student.image;
            document.getElementById('studentName').innerHTML = `Student Name: ${student.name}`;
            document.getElementById('studentFatherName').innerHTML = `Father Name: ${student.fatherName}`;
            document.getElementById('studentMotherName').innerHTML = `Mother Name: ${student.motherName}`;
            document.getElementById('studentFatherMobile').innerHTML = `Father Mobile: ${student.fatherMobile}`;
            document.getElementById('studentMotherMobile').innerHTML = `Mother Mobile: ${student.motherMobile}`;
        }
    } else if (section === 'academics') {
        contentDiv.innerHTML = `
            <div class="results-container">
                <h2>Academic Results</h2>
                <label for="year-select">Select Year:</label>
                <select id="year-select">
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                </select>
                <div class="academic-content">
                    <table class="results-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Sem-I</th>
                                <th>Sem-II</th>
                                <th>CGPA</th>
                            </tr>
                        </thead>
                        <tbody id="results-body">
                            <tr><td colspan="4">Select a year to view results.</td></tr>
                        </tbody>
                    </table>
                    <div class="chart-container">
                        <canvas id="cgpaChart"></canvas>
                    </div>
                </div>
            </div>`;
    
        const academicData = {
            1: { sem1: 8.5, sem2: 8.7, cgpa: 8.6 },
            2: { sem1: 8.8, sem2: 9.0, cgpa: 8.9 },
            3: { sem1: 9.2, sem2: 9.3, cgpa: 9.25 },
            4: { sem1: 9.4, sem2: 9.6, cgpa: 9.5 }
        };
    
        const yearSelect = document.getElementById('year-select');
        const resultsBody = document.getElementById('results-body');
    
        let cgpaChart;
    
        function initializeCgpaChart() {
            const ctx = document.getElementById('cgpaChart').getContext('2d');
            cgpaChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Sem-I', 'Sem-II'],
                    datasets: [{
                        label: 'CGPA Progress',
                        data: [0, 0], // Initial placeholder
                        backgroundColor: ['#42A5F5', '#FF7043'],
                        borderColor: ['#1E88E5', '#D84315'],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10
                        }
                    }
                }
            });
        }
    
        function updateCgpaChart(data) {
            if (cgpaChart) {
                cgpaChart.data.datasets[0].data = [data.sem1, data.sem2];
                cgpaChart.update();
            }
        }
    
        yearSelect.addEventListener('change', function () {
            const selectedYear = this.value;
            const data = academicData[selectedYear];
    
            if (data) {
                resultsBody.innerHTML = `
                    <tr>
                        <td>${selectedYear} Year</td>
                        <td>${data.sem1}</td>
                        <td>${data.sem2}</td>
                        <td>${data.cgpa}</td>
                    </tr>`;
                updateCgpaChart(data);
            } else {
                resultsBody.innerHTML = '<tr><td colspan="4">No data available.</td></tr>';
            }
        });
    
        initializeCgpaChart();
    } else if (section === 'attendance') {
        contentDiv.innerHTML = `<!-- Attendance content container -->
        <div class="attendance-container">
        <!-- Dropdowns for year and semester -->
        <div class="dropdowns">
            <label for="year">Year:</label>
            <select id="year">
                <option value="1">I</option>
                <option value="2">II</option>
                <option value="3">III</option>
                <option value="4">IV</option>
            </select>
            <label for="semester">Semester:</label>
            <select id="semester">
                <option value="1">I</option>
                <option value="2">II</option>
            </select>
        </div>
        <!-- Flex container for table and visualizations -->
        <div class="flex-container">
            <div class="pushAtt">
            <!-- Table with attendance details -->
            <table class="attendance-table">
                <thead>
                    <tr>
                        <th>Subject Name</th>
                        <th>Attended</th>
                        <th>Total Classes</th>
                        <th>Total Classes Not Attended</th>
                    </tr>
                </thead>
                <tbody id="subjectRows">
                    <tr data-subject="Subject 1">
                        <td>Subject 1</td>
                        <td>15</td>
                        <td>20</td>
                        <td>5</td>
                    </tr>
                    <tr data-subject="Subject 2">
                        <td>Subject 2</td>
                      <td>18</td>
                        <td>20</td>
                        <td>2</td>
                    </tr>
                    <tr data-subject="Subject 3">
                        <td>Subject 3</td>
                        <td>12</td>
                        <td>20</td>
                        <td>8</td>
                    </tr>
                    <tr data-subject="Subject 4">
                        <td>Subject 4</td>
                        <td>15</td>
                        <td>20</td>
                        <td>5</td>
                    </tr>
                    <tr data-subject="Subject 5">
                        <td>Subject 5</td>
                        <td>15</td>
                        <td>20</td>
                        <td>5</td>
                    </tr>
                    <tr data-subject="Subject 6">
                        <td>Subject 6</td>
                        <td>1</td>
                        <td>38</td>
                        <td>26</td>
                    </tr>
                    <tr data-subject="Subject 7">
                        <td>Subject 7</td>
                        <td>21</td>
                        <td>6</td>
                        <td>21</td>
                    </tr><tr data-subject="Subject 8">
                        <td>Subject 8</td>
                        <td>53</td>
                        <td>51</td>
                        <td>62</td>
                    </tr>
                </tbody>
            </table>

            <div class="attendance-percentage">
                Attendance up to date: <p id="attendance-percentage"></p>
            </div>

            </div>
            <!-- Visualizations -->
            <div class="visualizations">
                <!-- Bar Chart for Attendance Over Months -->
                <canvas id="barChart" width="400" height="200"></canvas>
                <!-- Pie Chart for Attended vs Not Attended -->
                <canvas id="pieChart" width="200" height="200"></canvas>
            </div>
        </div>
        </div>`;
        initializeBarChart();
        initializePieChart([15, 5]);

        // Add hover events for the table rows
        document.querySelectorAll('#subjectRows tr').forEach(row => {
            row.addEventListener('mouseenter', function () {
                const attended = parseInt(this.children[1].textContent);
                const total = parseInt(this.children[2].textContent);
                const notAttended = total - attended;
                updatePieChart([attended, notAttended]);
            });
        });
        setTimeout(() => {
            const ctxBar = document.getElementById('barChart').getContext('2d');
            new Chart(ctxBar, { type: 'bar', data: { /* Chart Data */ } });
        
            const ctxPie = document.getElementById('pieChart').getContext('2d');
            new Chart(ctxPie, { type: 'doughnut', data: { /* Chart Data */ } });
        }, 500);
        // Select elements
const yearSelect = document.getElementById('year');
const semesterSelect = document.getElementById('semester');

yearSelect.addEventListener('change', updateAttendance);
semesterSelect.addEventListener('change', updateAttendance);

function updateAttendance() {
    let attended = 0;
    let total = 0;

    // Calculate attendance dynamically
    document.querySelectorAll('#subjectRows tr').forEach(row => {
        const attendedClasses = parseInt(row.children[1].textContent);
        const totalClasses = parseInt(row.children[2].textContent);
        attended += attendedClasses;
        total += totalClasses;
    });

    const notAttended = total - attended;
    printAtt(attended, notAttended);
}

// Call updateAttendance when attendance content loads
updateAttendance();

        function initializeCgpaChart() {
            const ctx = document.getElementById('cgpaChart').getContext('2d');
            cgpaChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Sem-I', 'Sem-II'],
                    datasets: [{
                        label: 'CGPA Progress',
                        data: [0, 0], // Initial placeholder
                        backgroundColor: ['#42A5F5', '#FF7043'],
                        borderColor: ['#1E88E5', '#D84315'],
                        borderWidth: 2,
                        barPercentage: 0.4, // Reduce bar width
                        categoryPercentage: 0.5 // Adjust spacing
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10
                        }
                    }
                }
            });
        }
        

        function initializePieChart(data) {
            const ctx = document.getElementById('pieChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Attended', 'Not Attended'],
                datasets: [{
                    data: data,
                    backgroundColor: ['#66BB6A', '#FF7043'],
                }]
            }
        });
    }
    function initializeBarChart() {
        const ctx = document.getElementById('barChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Attendance Over Months',
                    data: [85, 88, 90, 78, 95, 80, 85, 88, 92, 86, 90, 87],
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Prevents forced aspect ratio
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                layout: {
                    padding: {
                        bottom: 10 // Adds spacing to prevent overflow
                    }
                }
            }
        });
    }
    
    

    function updatePieChart(data) {
        const pieChart = Chart.getChart('pieChart');
        pieChart.data.datasets[0].data = data;
        pieChart.update();
    }
    function printAtt(attended,notAttended)
    {
        const totalClasses = attended + notAttended;
        const percentage = Math.round((attended / totalClasses)*100);
        document.getElementById('attendance-percentage').textContent = percentage + '%';
    }
        printAtt(80,30);
    // Initially load home content
    changeContent('home');
    }
    else if (section === 'notices') {

        contentDiv.innerHTML = `
        
        `

    } else if (section === 'events') {
        contentDiv.innerHTML = '<h2>Events</h2><p>Upcoming events will be shown here.</p>';
    } else if (section === 'feeDue') {
        contentDiv.innerHTML = '<h2>Fee Due</h2><p>Fee details will be displayed here.</p>';
    } 
}

function logout() {
    sessionStorage.clear();
    // Redirect to the login page (you can change the URL here)
    window.location.href = "login.html";
}


