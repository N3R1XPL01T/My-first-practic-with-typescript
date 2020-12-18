/*
 * @author Saul Neri
*/

const user_name: HTMLInputElement = document.getElementById("username") as HTMLInputElement;
const passwd: HTMLInputElement = document.getElementById("password") as HTMLInputElement;

const form = document.getElementById("login");
const $name_label = document.getElementById("username-pane");
const $passwd_label = document.getElementById("password-pane");

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Log");
    ValidateForm();
})

function isValidUsername(username: string):boolean {
    if (username.length > 8) {
        return true;
    } else {
        return false;
    }
};

function isValidPassword(password: string):boolean {
    if (password.length > 8) {
        return true;
    } else {
        return false;
    }
};

function ValidateForm() {
    let username: string = user_name.value; 
    let password: string = passwd.value;
    
    $passwd_label.style.fontSize = "small";
    $name_label.style.fontSize = "small";   
    
    if (isValidUsername(username)) { 
        $name_label.style.color = "green";   
        $name_label.innerHTML = "";   
        setColorBorderOf(user_name, "green");
    } else { 
        $name_label.style.color = "red";   
        $name_label.innerHTML = "Usuario no valido"; 
        setColorBorderOf(user_name, "red"); 
    }

    if (isValidPassword(password)) {
        $passwd_label.style.color = "green";
        $passwd_label.innerHTML = "";
        setColorBorderOf(passwd, "green");
    } else {
        $passwd_label.style.color = "red";
        $passwd_label.innerHTML = "Contrasena incorrecta"; 
        setColorBorderOf(passwd, "red");
    }
}

function setColorBorderOf(element: HTMLInputElement, color: string):void {
    element.style.borderColor = color;
}

