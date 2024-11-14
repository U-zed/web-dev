// // dom 

// document.write ("Hello")

// console.log(
//     document.getElementsByTagName("h1")
// );

// let x = document.getElementsByTagName("h1")
// console.log(x);

console.log(
    document.getElementsByClassName("one")
);

let y =  document.querySelector("h1")
y.classList.add('box')
console.log(y);

y.classList.toggle('box')


let zz = document.getElementById("two");
console.log(zz.textContent);

let z = document.getElementsByClassName('one')
console.log(z); // array

let z0 = z[0] // object

console.log(z0);

let z1 = z0.innerText

console.log(z1);

console.log(
    z[0].innerText
);

let p = document.querySelector('.four')
p.textContent = "Updated text"
p.innerHTML = `<span>Hello Again</span>`
console.log(p);

// Date constructor

console.log(
    new Date().getDay()
);

document.getElementById("date").innerHTML = new Date();


//  assignment 
const myMonth = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

console.log(myMonth[new Date().getMonth()]);


const myDay = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday"
];
let day = new Date().getDay();
console.log(`Today is ${myDay[day]}`);

