document.addEventListener("DOMContentLoaded", function () {
    /* form selection */
    const form =document.getElementById("registration-form");
    /* feedback */
const feedbackDiv = document.getElementById("form-feedback");

//submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //validation variables
    let isValid = true;
    let messages = [];

    if(username.length < 3) {
        isValid = false;
        messages.push("User name must be atleast 3 characters long!")
    }

    if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Please enter a valid email address")
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at lease 8 characters long.")
    }

    //feedback display
    feedbackDiv.style.display = "block";

    if (isValid) {
        feedbackDiv.textContent ="Registration successful!";
        feedbackDiv.style.color ="#28a745";
    } else{
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
    }

});
});



