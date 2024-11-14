console.log(300);

// variable - memory location that holds data 
// declaration 
// assignment
// keyword-variable

let myAge = 12
// console.log(myAge);

// const and let works same way but you can change let in the future but const can't (it;s constant) 
const height = 22
console.log(height);

// data type 

// number 
let myNewAge = 15
console.log(myNewAge);

// strings
let num = '15'
console.log(num);

let str = "Hello World"
console.log(str);

// boolen 
let bool = true
console.log(bool);

// null 
let none = null
console.log(null);

// let yourName = prompt("Enter your name:")
// console.log(yourName);

//  basic math in js 

console.log(2+2);

let add = 2+23
console.log(add);

let sub = 34-2
console.log(sub);

let div = 30/3
console.log(div);

let mul = 10*5
console.log(mul);

let exp = 2**4
console.log(exp);

let mod = 5%2
console.log(mod);

console.log(20-3*4**2%1/6);


// operator precedence
// 1. ** (exponsianate )
// 2. % (modulus)
// 3. /  (division)
// 4. + (addition)
// 5. - (subtraction)

console.log(
    // typeof helps confirm data type 
    typeof(12)
);

let num1 = 12
let strNum1 = String(num1)
console.log(
    typeof(strNum1), num1
);

let str1 = "40"
let numNum = Number (str1)
console.log(
    typeof(numNum), str1
);

// concatenation
let name1 = "John"
console.log(
    "Hello, " + " " + name1
);

// interpolation
let name2 = "John"
console.log(
    `Hello, ${name2}`
);


