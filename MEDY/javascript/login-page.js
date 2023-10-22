let signUpButton = document.getElementById("sign-up"); 
let signInButton = document.getElementById("sign-in");
let nameField = document.getElementById("name-field");
let title = document.getElementById("title");

signInButton.onclick = function () {
    nameField.style.maxHeight = "0"; //style.display = "none"
    title.innerHTML = "Sign In"; // header name will change to Sign In
    signUpButton.classList.add("disabled"); //the button sign-up will have the class "disabled"
    signInButton.classList.remove("disabled"); //class "disabled" will be removed from sign-in button
}
signUpButton.onclick = function () {
    nameField.style.maxHeight = "60px";  //make appear the name field
    title.innerHTML = "Sign Up"; //header name will be "Sign Up"
    signInButton.classList.add("disabled"); //the button sign-in will have the class "disabled"
    signUpButton.classList.remove("disabled"); //class "disabled" will be removed from sign-up button
}