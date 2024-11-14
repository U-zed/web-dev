let score = prompt("Please enter your score (0-100):");
score = Number(score);
let grade;

if (score < 0 || score > 100) {
    console.log("Invalid score.");
} else if (score >= 70 && score <= 100) {
    grade = "A";
} else if (score >= 61 && score <= 69) {
    grade = "B";
} else if (score >= 50 && score <= 60) {
    grade = "C";
} else if (score >= 40 && score <= 49) {
    grade = "D";
} else {
    grade = "F";
}

if (grade) {
    console.log(`Score: ${score}, Grade: ${grade}`);
}
