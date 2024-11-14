// operators in JS

let x =2 
x = 25
console.log(x);
// increment and decrement 
let y = 7

// comparison

// 5 < 3 : no

let a = '3'
let b = 4
// 4 == 5

console.log(
    // a === b
    // a <= b
    a !== b
);

// logical
// AND &&, OR ||

// AND: 1 && 1: true 
// AND: 1 && 0: false

// OR: 1 || 1: true
// OR: 1 || 0: true
// OR: 1 || 0: false

// AND 
// let c = true
// let d = false

let c = 5 > 3 // true
let d = 4 === "4" // false

console.log(
    c && d
);

// OR 
let e = true
let f = false 

console.log(
    e || f
);


// tenary or conditional
let age = 12
console.log(
    age == 18 ? "You can vote" : "Nope, you cannot vote!"
);

let myAge = 19
console.log(
    myAge == 18 ? "You can vote" : "Nope, you cannot vote!"
);

// 18 or above 
let myAge2 = 119
console.log(
    myAge2 >= 18 ? "You can vote" : "Nope, you cannot vote!"
);

//  strings method 
//  concatenation 

let h = "John"
let i = "Doe"

console.log(
    h + " " + i
);


// length 
let j = "Earlycode"
let k = "COMPUTER"
console.log(
    j.length,
    j.toLocaleUpperCase(),
    k.toLowerCase()
);

console.log(
    j.length
)

console.log(
    j.toLocaleUpperCase()
);

console.log(
    k.toLowerCase()
);
// slice 
// indexing 

console.log(
    j.slice(0, 5).toLocaleUpperCase()
)

//  math module 
// abs (return absolute value)

let l = -20
console.log(
    Math.abs(l)
);

// round 
console.log(
// Math.round(3.942)
// Math.ceil(7.142)
// Math.floor(7.742)
Math.random()*100000
)
 
let m = Math.random()* 100000
console.log(
    Math.floor(m)
);
