// array  and objects 
//  array container [] square bracket
//  objects container {} cury braces

// ARRAY   [] square bracket
// CONTAINER THAT HOLDS MULTIPLE ITEMS/DATA 
let x = 12
console.log(x);

let a  = [12, 32, "Hello", true, null]
console.log(a);
console.log(
    a[0],
);


console.log(
    a.push(3001), a, // to add value to last value in an array  

    a.pop(), a,  // to remove value to last value in an array  

    a.unshift(2001), a,  // to add value to first value in an array  

    a.shift(), a,  // to remove first  value in an array  

a.includes("hellos")
);

//  OBJECTS
//  objects container {} cury braces
let car = {
    color: "Red",
    engine: "Chasis 001",
    size: "453 px",
    brand : "Ford"
}
console.log(car, 
    car.engine,
);

// FUNCTION ()
// function is a resusable block of codes that makes complex work easy when called
function greet () {  // defining the function with function keyword (arrow)
    console.log("Hello World!");       
}
greet() //calling

const greet2 = () => {  // defining the function with callback keyword
    console.log("Hello World!");    
}
greet2()  //calling

// parameters and arguments
let greeting = (user) => {  
    console.log("Hello" + user);    
}
greeting(" Wick")


let greetings = (myName)  => {  
    console.log( `Welcome ${myName}. How have you been?`)
}
let i = prompt("What is your name:");
greetings(i)