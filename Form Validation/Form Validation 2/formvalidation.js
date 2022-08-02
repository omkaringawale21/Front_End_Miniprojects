const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});

const sendData = (usernameVal, sRate, count) => {
    if (sRate === count) {
        alert("Registration Successfully!!")
        swal("Welcome" + " " + usernameVal + " " + "Have a nice day!");
        location.href = `demo.html?username=${usernameVal}`;
    }
};

// For Final Data Validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        }else{
            return false;
        }
    }
};

// More email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
};

// Define the Validate Function
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank');     
    }else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Username min 3 char');     
    }else{
        setSuccessMsg(username);
    }

    // validate email
    if (emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank');     
    }else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid Email');
    }else{
        setSuccessMsg(email);
    }

    // validate phone number
    if (phoneVal === "") {
        setErrorMsg(phone, 'Phone Number cannot be blank');     
    }else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Enter a valid Phone Number');
    }else{
        setSuccessMsg(phone);
    }

    // validate password
    if (passwordVal === "") {
        setErrorMsg(password, 'Password cannot be blank');     
    }else if (passwordVal.length <= 5) {
        setErrorMsg(password, 'Minimum 6 char');
    }else{
        setSuccessMsg(password);
    }

    // validate confirm password
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'Confirm Password cannot be blank');     
    }else if (passwordVal != cpasswordVal) {
        setErrorMsg(cpassword, 'Password are not matching!');
    }else{
        setSuccessMsg(cpassword);
    }

    function setErrorMsg(input, errormsgs){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "form-control error";
        small.innerText = errormsgs;
    };

    function setSuccessMsg(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    };

    successMsg(usernameVal);

}