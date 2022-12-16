function check () {
    let name = document.getElementById("name");
    let family = document.getElementById("family");
    let login = document.getElementById("login");
    let email = document.getElementById("email");
    let password = document.getElementById("password"); 
    let isFormValid = true; 

    document.getElementById('errorMessage').innerHTML = "";
    document.getElementById('success').innerHTML = "";

    if (name.value == ''){
        document.getElementById('errorMessage')
        .innerHTML += "Ваше имя не заполнено<br>";
        isFormValid = false;
    } 
    
    if (family.value == ''){
        document.getElementById('errorMessage')
        .innerHTML += "<p>Ваша фамилия не заполнена</p>";
        isFormValid = false;
    } 
    if (login.value == ''){
        document.getElementById('errorMessage')
        .innerHTML += "Ваше Имя пользователя не заполнено<br>";
        isFormValid = false;
    } 
    if (email.value == ''){
        document.getElementById('errorMessage')
        .innerHTML += "Ваш емэйл не заполнен<br>";
        isFormValid = false;
    } 
    if (password.value == ''){
        document.getElementById('errorMessage')
        .innerHTML += "Ваш пароль не заполнен<br>";
        isFormValid = false;
    } 
    if (isFormValid ==true){
        document.getElementById('success').innerHTML += ('Добро пожаловать,' + name.value);
    }
}

