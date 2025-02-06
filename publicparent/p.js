document.addEventListener('DOMContentLoaded',()=> {
    document.getElementById('home').classList.add('active');
    changeContent('home');
});
const studentData = JSON.parse(sessionStorage.getItem('studentData'));
function changeContent(section) {
    // Remove 'active' class from all nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    // Add 'active' class to the clicked link
    document.getElementById(section).classList.add('active');

    // Change the content based on the selected section
    let contentDiv = document.getElementById('content');

    if (section === 'home') {
        // Student Details Template
        contentDiv.innerHTML = `
        <div class="details-box">
            <div class="student-details">
                <p><strong>Student Name:</strong> ${studentData.student_name}</p>
                <p><strong>Student Roll Number:</strong> ${studentData.roll_number}</p>
                <p><strong>Department:</strong> ${studentData.department}</p>
                <p><strong>Section:</strong> ${studentData.section}</p>
                <p><strong>Mentor Name:</strong> ${studentData.mentor_name}</p>
                <p><strong>Mentor Phone Number:</strong> ${studentData.mentor_phone_number}</p>
                <p><strong>Academic Year Currently In:</strong> ${studentData.academic_year}</p>
                <p><strong>Joining Year:</strong> ${studentData.joining_year}</p>
            </div>
            <div class="student-image">
                <img src="https://via.placeholder.com/150" alt="Student Image">
            </div>
        </div>`;
    } 
    else if(section==='academics'){
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
                    <canvas id="cgpaChart" width="400" height="200"></canvas>
                </div>`;

                const academicData = {
                    1: { sem1: 8.5, sem2: 8.7, cgpa: 8.6 },
                    2: { sem1: 8.8, sem2: 9.0, cgpa: 8.9 },
                    3: { sem1: 9.2, sem2: 9.3, cgpa: 9.25 },
                    4: { sem1: 9.4, sem2: 9.6, cgpa: 9.5 }
                };

                const yearSelect = document.getElementById('year-select');
                const resultsBody = document.getElementById('results-body');

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
    }
    else if (section === 'attendance') {
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
        
        // Chart.js initialization functions (same as before)
        function initializeBarChart() {
            const ctx = document.getElementById('barChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        label: 'Attendance Percentage',
                        data: [70, 85, 75, 90, 80, 95],
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
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
    loadHomeContent();
    }
    else if (section === 'notices') {
        contentDiv.innerHTML = '<h2>Notices</h2><p>All notices will be listed here.</p>';
    } else if (section === 'events') {
        contentDiv.innerHTML = '<h2>Events</h2><p>Upcoming events will be shown here.</p>';
    } else if (section === 'feeDue') {
        contentDiv.innerHTML = '<h2>Fee Due</h2><p>Fee details will be displayed here.</p>';
    } else if (section === 'academics') {
        contentDiv.innerHTML = '<h2>Academics</h2><p>Academic details will be shown here.</p>';
    }
}

function logout() {
    sessionStorage.clear();
    // Redirect to the login page (you can change the URL here)
    window.location.href = "login.html";
}



