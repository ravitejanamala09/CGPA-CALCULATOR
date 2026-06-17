function calculateCGPA() {

    let semesters = Number(prompt("Enter Number of Semesters"));

    let total = 0;

    for(let i = 1; i <= semesters; i++) {

        let sgpa = Number(prompt("Enter SGPA of Semester " + i));

        total = total + sgpa;
    }

    let cgpa = total / semesters;

    alert("Your CGPA is: " + cgpa.toFixed(2));
}
