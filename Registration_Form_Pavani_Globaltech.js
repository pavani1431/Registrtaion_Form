let firstNameEl = document.getElementById("firstName");
let firstNameErrMsgEl = document.getElementById("firstNameErrMsg");
let lastNameEl = document.getElementById("lastName");
let lastNameErrMsgEl = document.getElementById("lastNameErrMsg");
let collegeNameEl = document.getElementById("collegeName");
let collegeNameErrMsgEl = document.getElementById("collegeNameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let myFormEl = document.getElementById("myForm");
let areaCodeEl = document.getElementById("areaCode");
let areaCodeErrMsgEl = document.getElementById("areaCodeErrMsg");
let phoneNumEl = document.getElementById("phoneNum");
let phoneNumErrMsgEl = document.getElementById("phoneNumErrMsg");
let courseNameEl = document.getElementById("courseName");

let firstName = function() {
    let firstNameValue = firstNameEl.value;
    if (firstNameValue === "") {
        firstNameErrMsgEl.textContent = "Required*";
    } else {
        firstNameErrMsgEl.textContent = "";
    }
}
let lastName = function() {
    let lastNameValue = lastNameEl.value;
    if (lastNameValue === "") {
        lastNameErrMsgEl.textContent = "Required*";
    } else {
        lastNameErrMsgEl.textContent = "";
    }
}
let emialConfirm = function() {
    let emailValue = emailEl.value;
    if (emailValue === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
}
let collegeName = function() {
    let collegeNameValue = collegeNameEl.value;
    if (collegeNameValue === "") {
        collegeNameErrMsgEl.textContent = "Required*";
    } else {
        collegeNameErrMsgEl.textContent = "";
    }
}
let phoneNum = function() {
    let phoneNumValue = phoneNumEl.value;
    if (phoneNumValue === "") {
        phoneNumErrMsgEl.textContent = "Required*";
    } else {
        phoneNumErrMsgEl.textContent = "";
    }
}

let areaCode = function() {
    let areaCodeValue = areaCodeEl.value;
    if (areaCodeValue === "") {
        areaCodeErrMsgEl.textContent = "Required*";
    } else {
        areaCodeErrMsgEl.textContent = "";
    }
}

firstNameEl.addEventListener("blur", firstName);
lastNameEl.addEventListener("blur", lastName);
collegeNameEl.addEventListener("blur", collegeName);
emailEl.addEventListener("blur", emialConfirm);
phoneNumEl.addEventListener("blur", phoneNum);
areaCodeEl.addEventListener("blur", areaCode);

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    emialConfirm();
    firstName();
    lastName();
    collegeName();
    phoneNum();
    areaCode();
});