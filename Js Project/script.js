
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let Repass = document.getElementById("re-pass");
let formDiv = document.getElementsByClassName("form-inputs")[0];
let loginDiv = document.getElementsByClassName("login-inputs")[0];
let page2From = document.getElementsByClassName("page2From")[0];
let emailArray = [];
let passwordArray = [];

//page 1 validation
let span = document.createElement("span");
function validation(e) {
    if (isFinite(fname.value) || isFinite(lname.value)) {
        e.preventDefault();
        span.style.display = "inline"
        span.style.color = "red"
        span.textContent = "enter string data"
        formDiv.append(span);
    }
    else if (pass.value.length < 8 || Repass.value.length < 8) {
        e.preventDefault();
        span.style.display = "inline"
        span.style.color = "red"
        span.textContent = "password must be at least 8 digits"
        formDiv.append(span);
    }
    else if (pass.value !== Repass.value) {
        e.preventDefault();
        span.style.display = "inline"
        span.style.color = "red"
        span.textContent = "password is not matched"
        formDiv.append(span);
    }
    //if email not exists =>push
    else if (emailArray.indexOf(email.value) == -1) {
        emailArray.push(email.value);
        passwordArray.push(pass.value);
    }
    //if email exists=>alert
    else {
        alert(email.value + " is already register.")
    }
    setCookie("email",email.value,new Date("2/1/2024"));
    setCookie("pass",pass.value,new Date("2/1/2024"))
    setCookie("fname",fname.value,new Date("2/1/2024"))
    setCookie("lname",lname.value,new Date("2/1/2024"))
}



function setCookie(key,value,date){
    document.cookie = key+"="+value+";expires="+date;
}



function getCookie(key){
    var res = "not found";
    var data = document.cookie;
    var arr = data.split("; ");
    arr.forEach(function(el){
        var keyAndValue = el.split("=");
        if(keyAndValue[0] == key){
            res = keyAndValue[1];
        }
    })
    return res;
}



function deleteCookie(key){
    var myDate = new Date("2/1/2000");
    setCookie(key , "ahmed" , myDate);
}


//prevent back
function disableBack() { window.history.forward(); }
setTimeout("disableBack()", 0);
window.onunload = function () { null };


//page 2 validation
var loginEmail = document.getElementById("loginEmail")
var loginPass = document.getElementById("loginPass")

function validation2(e) {
    if (loginEmail.value !== getCookie("email")|| loginPass.value !== getCookie("pass")) {
        e.preventDefault();
        span.style.display = "inline"
        span.style.paddingLeft="80px"
        span.style.color = "red"
        span.textContent = "wrong email or password"
        page2From.append(span);
    }
}



