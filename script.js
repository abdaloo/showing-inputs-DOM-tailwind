//Q no: 5
//Create a form with two inputs and a submit button. Display the entered values when the button is clicked.
let formName = document.getElementById("name");
let formEmail = document.getElementById("email");
let formSubmit = document.getElementById("formSubmit");

let name;
let email;
formSubmit.onclick = function(){
   name = document.getElementById("formName").value;
   email = document.getElementById("formEmail").value;

   //Use this method without initailizing the variable for it.
    // document.getElementById("name").textContent = `Your name: ${name}`;
    // document.getElementById("email").textContent = `Your email: ${email}`;

    //use this method and initialize the variable for it.
    formName.textContent = `Your name: ${name}`;
    formEmail.textContent = `Your email: ${email}`;

    //log in console.
    // console.log(name)
    // console.log(email)
}