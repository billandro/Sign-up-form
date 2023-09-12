const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".error-message"); 
const errors = document.querySelectorAll(".error");

function passwordCheck() {
    if (document.querySelector("#password").value == document.querySelector("#confirm-password").value) {
        errorMessage.textContent = "Passwords match";
        errorMessage.style.color = "green";
        errors.forEach((error) => {
            error.style.border = "1px solid green";
        });
    } else {
        errorMessage.textContent = "Passwords do not match";
        errorMessage.style.color = "red";
        errors.forEach((error) => {
            error.style.border = "1px solid red";
        });
    }
}