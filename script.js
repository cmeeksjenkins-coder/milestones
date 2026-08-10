const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    let formIsValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        formIsValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email address.";
        formIsValid = false;
    } else if (!email.validity.valid) {
        emailError.textContent = "Please enter a valid email address.";
        formIsValid = false;
    }

    if (subject.value.trim() === "") {
        subjectError.textContent = "Please enter a subject.";
        formIsValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        formIsValid = false;
    }
});
