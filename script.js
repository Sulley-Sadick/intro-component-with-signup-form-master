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

// ** Add evenListener to submit button **//
submitBtn.addEventListener("click", function () {
  // retrieve input field values
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;
  const lettersOnly = /^[A-Za\s]+$/;

  //check if firstNameInput is invalid
  if (firstNameValue === "") {
    firstNameErrorMessage.classList.add("active");
    firstNameInput.classList.add("main-error");
  } else if (lettersOnly.test(firstNameValue)) {
    firstNameErrorMessage.classList.remove("active");
    firstNameInput.classList.remove("main-error");
  }
});
