let newDiv = document.createElement("div");
newDiv.classList.add('container')
function validate(){
    const login = {
        username: "admin",
        password: 123
    }
    let userNameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    if(login.username == userNameInput && login.password == passwordInput){
        successLogin(); // if validation success
    }else {
        failedLogin(); // if validation failed
    }

    return document.body.appendChild(newDiv);

} // end of validate function



function successLogin(){
    newDiv.classList.remove('failed');
    newDiv.classList.add('success');
    return newDiv.innerHTML = 'Logged in Successfully, Welcome!';

} // end of function success message 


function failedLogin(){
    newDiv.classList.remove('success');
    newDiv.classList.add('failed');
    return  newDiv.innerHTML = 'Wrong username or password';

} // end of function failed message 


function inpFocus (elm){
    elm.style.background = "yellow";

} // end of function when user typing input 

function chgDefault(elm){
    elm.style.background = "white";

} // end of function when user leave input 
