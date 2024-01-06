import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <document.addEventListener("DOMContentLoaded", function () {
  const slidePage = document.querySelector(".slide-page");
  const nextBtnFirst = document.querySelector(".firstNext");
  const prevBtnSec = document.querySelector(".prev-1");
  const nextBtnSec = document.querySelector(".next-1");
  const prevBtnThird = document.querySelector(".prev-2");
  const nextBtnThird = document.querySelector(".next-2");
  const prevBtnFourth = document.querySelector(".prev-3");
  const submitBtn = document.querySelector(".submit");
  const progressText = document.querySelectorAll(".step p");
  const progressCheck = document.querySelectorAll(".step .check");
  const bullet = document.querySelectorAll(".step .bullet");
  let current = 1;

  function validateInputs(current) {
    const inputs = document.querySelectorAll(
      `.page:nth-child(${current}) input[required], .page:nth-child(${current}) select[required]`
    );
    for (const input of inputs) {
      const value = input.value.trim();
      if (value === "") {
        showErrorMessage(input, "Please fill in all required fields.");
        return false;
      } else if (input.type === "email" && !validateEmail(value)) {
        showErrorMessage(input, "Please enter a valid email address.");
        return false;
      } else if (input.name === "gender" && value === "Select") {
        showErrorMessage(input, "Please select a gender.");
        return false;
      } else if (input.name === "religion" && value === "Select") {
        showErrorMessage(input, "Please select a religion.");
        return false;
      } else if (input.name === "password" && !validatePassword(value)) {
        showErrorMessage(
          input,
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
        );
        return false;
      } else {
        hideErrorMessage(input);
      }
    }
    return true;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  function showErrorMessage(input, message) {
    let errorMessageSpan = input.parentElement.querySelector(".error-message");
    if (!errorMessageSpan) {
      errorMessageSpan = document.createElement("span");
      errorMessageSpan.className = "error-message";
      errorMessageSpan.textContent = message;
      input.parentElement.appendChild(errorMessageSpan);
    }
  }

  function hideErrorMessage(input) {
    const errorMessageSpan = input.parentElement.querySelector(".error-message");
    if (errorMessageSpan) {
      errorMessageSpan.remove();
    }
  }

  nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    if (validateInputs(current)) {
      slidePage.style.marginLeft = "-25%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    }
  });

  // Add the remaining event listeners here...

  submitBtn.addEventListener("click", function () {
    if (validateInputs(current)) {
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
      setTimeout(function () {
        // Add any additional logic after submission
      }, 800);
    }
  });
});

      <script>

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

function validateInputs(current) {
  const inputs = document.querySelectorAll(`.page:nth-child(${current}) input[required], .page:nth-child(${current}) select[required]`);
  for (const input of inputs) {
    const value = input.value.trim();
    if (value === "") {
      showErrorMessage(input, "Please fill in all required fields.");
      return false;
    } else if (input.type === "email" && !validateEmail(value)) {
      showErrorMessage(input, "Please enter a valid email address.");
      return false;
    } else if (input.name === "gender" && value === "Select") {
      showErrorMessage(input, "Please select a gender.");
      return false;
    } else if (input.name === "religion" && value === "Select") {
      showErrorMessage(input, "Please select a religion.");
      return false;
    } else if (input.name === "password" && !validatePassword(value)) {
      showErrorMessage(input, "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
      return false;
    } else {
      hideErrorMessage(input);
    }
  }
  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function showErrorMessage(input, message) {
  let errorMessageSpan = input.parentElement.querySelector(".error-message");
  if (!errorMessageSpan) {
    errorMessageSpan = document.createElement("span");
    errorMessageSpan.className = "error-message";
    errorMessageSpan.textContent = message;
    input.parentElement.appendChild(errorMessageSpan);
  }
}

function hideErrorMessage(input) {
  const errorMessageSpan = input.parentElement.querySelector(".error-message");
  if (errorMessageSpan) {
    errorMessageSpan.remove();
  }
}

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateInputs(current)) {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateInputs(current)) {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateInputs(current)) {
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateInputs(current - 1)) {
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  }
});

prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateInputs(current - 1)) {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  }
});

prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateInputs(current - 1)) {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  }
});

submitBtn.addEventListener("click", function () {
  if (validateInputs(current)) {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
      
    }, 800);
  }
});


      </script>
      <script>
  function displayFileName(input) {
    const fileName = input.files[0].name;
    document.getElementById('file-name').innerText = fileName;
  }
</script>
    </div>
  );
}

export default App;
