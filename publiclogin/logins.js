document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const sliderButton = document.querySelector('.slider-button');
    const nameText = document.getElementById("name");
    slider.addEventListener('click', () => toggleSlider());
});

async function par() { // Moved outside to make it global
    const nameText = document.getElementById("name");
    if (nameText.innerHTML === "Parent") {
        const rollNumber = document.getElementById('rollNumber').value;
        if (!rollNumber) return;
        try {
            const response = await fetch(`/students/${rollNumber}`);
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                document.querySelector(".details").innerHTML = `
                    <p>Name: ${data.student_name}</p>
                    <p>Department: ${data.department}</p>
                    <p>Section: ${data.section}</p>
                `;
                sessionStorage.setItem('studentData', JSON.stringify(data));
                window.location.href = "p.html";
            } else {
                document.querySelector(".details").innerHTML = "<p>Student not found</p>";
            }
        } catch (error) {
            console.error("Error fetching student data:", error);
            document.querySelector(".details").innerHTML = "<p>Error fetching student data</p>";
        }
    }
}

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
                <input type="text" placeholder="Password" id="Password">
            </div>`;
        document.getElementById("log").innerHTML = `
            <button class="next-btn" onclick="stud()">
                <a href="" style="text-decoration: none; color: #fff; font-size: large;">Next</a>
            </button>`;
    } else {
        sliderButton.style.left = '0px';
        changeContent("Parent");
        document.getElementById("the_user").innerHTML = `
            <div class="input-field">
                <input type="text" placeholder="Student roll number" id="rollNumber" oninput="par()">
            </div>
            <button type="button" class="search-btn" onclick="par()">Search</button>
            <div class="details">
                <p>Name:</p>
                <p>Department:</p>
                <p>Section:</p>
            </div>`;
        document.getElementById("log").innerHTML = `
            <button class="next-btn">
                <a href="" style="text-decoration: none; color: #fff; font-size: large;">Next</a>
            </button>`;
        par(); // Call par() when switching to Parent
    }
}

function changeContent(role) {
    const nameText = document.getElementById("name");
    nameText.innerHTML = role;
}

function stud() {
    window.location.href = "s_1.html";
}
