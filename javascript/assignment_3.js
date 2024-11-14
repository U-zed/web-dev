function greetUser(name) {
  let isInvalidInput = typeof name !== "string" || !isNaN(name);

  return isInvalidInput ? "Invalid input"  : `Hello, ${name}! How have you been?`;
}

let myName = prompt("What is your name?");
console.log(greetUser(myName));
