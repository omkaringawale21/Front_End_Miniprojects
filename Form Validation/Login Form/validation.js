let username = document.getElementById("username");
let password = document.getElementById("password");
let userError = document.getElementById("userError");
let passError = document.getElementById("passError");
let flag = 1;

function validateFrom(){
    if (username.value == "") {
        userError.innerHTML = "User Name is Empty";
        flag = 0;
    }else if (username.value.length < 3) {
        userError.innerHTML = "User Name Required Min 3 Char";
        flag = 0;
    }else{
        userError.innerHTML = "";
        flag = 1;
    }

    if (password.value == "") {
        passError.innerHTML = "Password is Empty";
        flag = 0;
    }else if (password.value.length < 6) {
        passError.innerHTML = "Password Required Min 5 Char";
        flag = 0;
    }else{
        passError.innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
    }else{
        return false;
    }
    
}