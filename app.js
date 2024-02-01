// Sign Up Form
let signupName = document.getElementById(`signup-name`);
let signupEmail = document.getElementById(`signup-email`);
let signupPsw = document.getElementById(`signup-psw`);
function Sup() {
    if (signupName.value !== `` && signupEmail.value !== `` && signupPsw.value !== ``) {
        localStorage.setItem(`signup-name`, signupName.value);
        localStorage.setItem(`signup-email`, signupEmail.value);
        localStorage.setItem(`signup-psw`, signupPsw.value);
        window.location.href = `login.html`;
    } else {
        alert(`Please fill out all fields`);
    }
}
// Sign Up Form

// Log In Form
let loginEmail = document.getElementById(`login-email`);
let loginPsw = document.getElementById(`login-psw`);
// let text = document.getElementById(`dashboard-text`).innerText
function Lin() {
    localStorage.setItem(`login-email`, loginEmail.value);
    localStorage.setItem(`login-psw`, loginPsw.value);
    let signupEmailData = window.localStorage.getItem(`signup-email`);
    let signupPswData = window.localStorage.getItem(`signup-psw`);
    let loginEmailData = window.localStorage.getItem(`login-email`);
    let loginPswData = window.localStorage.getItem(`login-psw`);
    // let userName = window.localStorage.getItem(`signup-name`)
    if (signupEmailData === loginEmailData && signupPswData === loginPswData) {
        // let msg =  
        // console.log(msg);
        // text = `Congratulations! ${userName}your account has been successfully created.`
        window.location.href = `dashboard.html`;
    } else {
        alert(`Please enter a valid email or password`);
    }
}
// Log In Form
