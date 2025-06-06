// ** use strict mode **//
"use strict";

// ** Selecting elements **//
const submitBtn = document.getElementById("submit-button");

// ** error messages ** //
const firstNameErrorMessage = document.querySelector(
  ".firstname-error-message"
);
const lastNameErrorMessage = document.querySelector(".lastname-error-message");
const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");

// ** input fields ** //
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// ** selecting icon image ** //
const eyeImage = document.querySelector(".eyes-close");

//** Add Eventlistener to eyeImage **//
eyeImage.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    eyeImage.src = "./images/eye-open.png";
    passwordInput.type = "text";
  } else {
    eyeImage.src = "./images/eye-close.png";
    passwordInput.type = "password";
  }
});

// Function: To get trimmed input
const getValue = function (input) {
  return input.value.trim();
};

// Function: To set error
const setError = function (input, messageElement, messageText) {
  input.classList.add("error-border", "error-image");
  messageElement.classList.add("active");
  messageElement.textContent = messageText;
};

//Function: To remove error
const removeError = function (input, messageElement) {
  input.classList.remove("error-border", "error-image");
  messageElement.classList.remove("active");
  messageElement.textContent = "";
};

//function: To validate name
const validateName = function (input, messageElement, label) {
  const value = input.value.trim();
  const lettersOnly = /^[A-Za-z\s]+$/;

  if (!value) {
    setError(input, messageElement, `${label} cannot be empty`);
    return false;
  }

  if (!lettersOnly.test(value)) {
    setError(input, messageElement, "Only letters allowed");
    return false;
  }

  removeError(input, messageElement);
  return true;
};

// Function: To validate email
const validateEmail = function (input, messageElement) {
  const value = input.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!value) {
    setError(input, messageElement, "Email cannot be empty");
    return false;
  }

  if (!emailPattern.test(value)) {
    setError(input, messageElement, "Looks like this is not email");
    input.placeholder = "example@email.com";
    input.classList.add("placeholder-error");
    return false;
  }

  removeError(emailInput, emailErrorMessage);
  return true;
};

// Function: To validate password
const validatePassword = function (input, messageElement, label) {
  const value = input.value.trim();
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%?&]{8,}$/;

  if (!value) {
    setError(input, messageElement, `${label} cannot be empty`);
    return false;
  }

  if (!passwordPattern.test(value)) {
    setError(
      input,
      messageElement,
      `${label} "Password must be atleast 8 characters. Atleast 1 uppercase, lowercase, 1 digit"`
    );
    return false;
  }

  removeError(input, messageElement);
};

//** Add Eventlistener to eyeImage **//
eyeImage.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    eyeImage.src = "./images/eye-open.png";
    passwordInput.type = "text";
  } else {
    eyeImage.src = "./images/eye-close.png";
    passwordInput.type = "password";
  }
});

// ** Add eventListener to submit button
submitBtn.addEventListener("click", function (e) {
  // reusing validateName with firstNameInput
  const isValidFirstName = validateName(
    firstNameInput,
    firstNameErrorMessage,
    "First Name"
  );

  // reusing validateName with lastNameInput
  const isValidLastName = validateName(
    lastNameInput,
    lastNameErrorMessage,
    "Last Name"
  );

  // reusing validateEmail with the emailInput
  const isValidEmail = validateEmail(emailInput, emailErrorMessage);

  // reusing validatePassword with passwordInput
  const isValidPassword = validatePassword(
    passwordInput,
    passwordErrorMessage,
    "Password"
  );

  if (
    !isValidFirstName ||
    !isValidLastName ||
    !isValidEmail ||
    !isValidPassword
  ) {
    e.preventDefault();
  }
});
