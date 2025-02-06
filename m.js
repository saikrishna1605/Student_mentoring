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