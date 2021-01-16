const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const addErrorClasses = (input, errorDisplay) => {
  input.classList.add("placeholder-error");
  input.classList.add("border-error");
  errorDisplay.classList.add("block");
};

const removeErrorClasses = (input, errorDisplay) => {
  input.classList.remove("placeholder-error");
  input.classList.remove("border-error");
  errorDisplay.classList.remove("block");
};

const focusClasses = (input, errorDisplay) => {
  input.classList.add("input-field-focus");
  input.classList.add("placeholder-normal");
  errorDisplay.classList.add("none");
};

const validateForm = (e) => {
  e.preventDefault();
  if (form.checkValidity() == false) {
    if (nameInput.value === "") {
      addErrorClasses(nameInput, nameError);
    }

    if (emailInput.value === "") {
      addErrorClasses(emailInput, emailError);
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailInput.value.match(emailRegex)) {
      addErrorClasses(emailInput, emailError);
      emailError.textContent = "Please use a valid email address";
    }

    if (messageInput.value === "") {
      addErrorClasses(messageInput, messageError);
    }
  }
};

nameInput.addEventListener("focus", () => {
  removeErrorClasses(nameInput, nameError);
  focusClasses(nameInput, nameError);
});

emailInput.addEventListener("focus", () => {
  removeErrorClasses(emailInput, emailError);
  focusClasses(emailInput, emailError);
});

messageInput.addEventListener("focus", () => {
  removeErrorClasses(messageInput, messageError);
  focusClasses(messageInput, messageError);
});

form.addEventListener("submit", validateForm);
