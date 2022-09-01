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
        successLogin();
    }else {
        failedLogin();
    }
    
    return document.body.appendChild(newDiv);
}



function successLogin(){
    newDiv.classList.remove('failed');
    newDiv.classList.add('success');
    return newDiv.innerHTML = 'Logged in Successfully, Welcome!';
}


function failedLogin(){
    newDiv.classList.remove('success');
    newDiv.setAttribute('class','failed');
    newDiv.classList.add('container');
    return  newDiv.innerHTML = 'Wrong username or password';
}