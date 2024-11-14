

let button = document.querySelector('#btn')

// add event listener 
button.addEventListener('click', () => {
    console.log('Button clicked');    
})

let myForm = document.getElementById('myForm')

let array = ['admin@gmail.com', 'Austine11']

const result = document.getElementById("result");


myForm.addEventListener('submit',  (event) =>{
    event.preventDefault() // prevent page reload
    console.log('Form Submitted');
    
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(username);
    console.log(email);
    console.log(password);

    if (email == array[0] && password == array[1]) {
        result.textContent = `Welcome, ${username}`
    } else {
        result.textContent =`Sorry ${username}, you entered incorrect email or password`
    }
    
})

