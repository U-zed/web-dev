const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
};

const {name} = person 
console.log(name);

const {age} = person
console.log(age);

const {occupation} = person
console.log(occupation);

// distructuring objects inside array 

// distructuring is breaking down codes to make it easier

// An array is like a box or a container where you can store a list of things 

// method used to loop through each item in an array, 

// allowing you to run a piece of code for every element in that array.

const myArray = [12, "null", {name2: "John Wick", dog: true, age2: 30}, "Hello"];

const { name2 } = myArray[2];
console.log(name2);

const { dog } = myArray[2];
console.log(dog);

const { age2 } = myArray[2];
console.log(age2);

const [a, , b] = myArray

console.log(a, b.name2);

//spread (...) gives access to values in array without giving us the array

const myArray2 = [50, "man", 44, "woman"]

const myArray3 =[...myArray, ...myArray2]

console.log(myArray3);


export const fileToExport = 13
