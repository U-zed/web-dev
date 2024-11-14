// const greet = ()  =>{
//    return("Hello") 
// }
// alert(greet());


let z = 6

const nonCheck = () =>{
    if(z % 2 == 1){
        console.log("Odd number")
    } else {
        console.log("Even number")
    }
}

nonCheck()

let drink = "coke"
console.log(drink == "coke");


if (drink  == "coke") {
    console.log("Buy coke");    
} else if (drink == sprite) {
    console.log("Buy sprite");    
} else {
     console.log("Buy water");    
}


let score = prompt("Enter your score to see your grade. NOTE: Must be a number and not < 0 or > 100");
let grade;

if (score >= 70 && score <= 100) {
    grade = "A";
} else if (score >= 61 && score <= 69) {
    grade = "B";
} else if (score >= 50 && score <= 60) {
    grade = "C";
} else if (score >= 40 && score <= 49) {
    grade = "D";
} else if (score >= 0 && score <= 39) {
    grade = "F";
} else if (isNaN() ) {
    grade = "Invalid input";
} if (score || score < 0 || score > 100)

console.log(`Score: ${score}, Grade: ${grade}`);

