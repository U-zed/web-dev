let nam = prompt("Enter your name");
console.log(
     `NAME: ${nam}`
    );

let username = prompt("Enter your username");
console.log(
     `USERNAME: ${username.toLowerCase()}.`
);

let email = prompt("Enter your email address");
console.log(
    `EMAIL: ${email.toLowerCase()}.`
);

let password = prompt("Enter your password");
console.log(
    password.length >= 8 ? `PASSWORD: ${password}` : "Password must be at least 8 characters long."
);