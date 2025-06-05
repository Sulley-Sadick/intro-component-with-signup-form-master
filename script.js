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

// Function: To add error message and error image
const addErrorMessageAndImage = function () {
  firstNameErrorMessage.classList.add("active");
  firstNameInput.classList.add("main-error");
};

//Function: To remove error message and error image

const removeErrorMessageAndImage = function () {
  firstNameErrorMessage.classList.remove("active");
  firstNameInput.classList.add("main-error");
};

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
    addErrorMessageAndImage();
  } else if (lettersOnly.test(firstNameValue)) {
    removeErrorMessageAndImage();
  } else {
    firstNameInput.placeholder = "Only letters allowed";
    addErrorMessageAndImage();
  }
});
