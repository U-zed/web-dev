// LOOP
// initialization, condition and increment or decrement

// 1. switch
let day = "Sunday";

switch (day) {
  case "Monday":
    console.log(1);
    break;
  case "Tuesday":
    console.log(2);
  default:
}

//2. for loop
for (let i = 5; i <= 10; i++) {
  console.log(i);
}

//3. while loop
let j = 1; // initialization
while (j <= 5) {
  // condition
  console.log("hello");
  j++; // increment or decrement
}

//4. for each loop
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index, array) => {
  console.log(num * 2, index, array);
});

// EXERCISE 1
// array of fruits, return uppercase
let fruits = ["mango", "orange", "paw-paw"];
fruits.forEach((a) => {
  console.log(a.toUpperCase());
});

// EXERCISE 2
// array of numbers, return square of the numbers and their sum
let myNumber = [1, 2, 3, 4, 5];
let sum = 0;

myNumber.forEach((myNum) => {
  let square = myNum * myNum;
  console.log(`The square of ${myNum} is ${square}`);
  sum += square;
});
console.log(`The sum of square is ${sum}`);

// EXERCISE 3

// generate numbers in this form 0, 1, 1,  2, 4, 8
// let generateNumbers = [0, 1];  
// for (let i = 2; i < 6; i++) {
//   generateNumbers.push(generateNumbers[i] * 2);  

// console.log(generateNumbers);  
// }

// EXERCISE 4
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;  
}

console.log(`Factorial of ${num} is ${fact}`);  
