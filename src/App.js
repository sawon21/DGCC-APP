import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="container">
         <header>Membership Form</header>
         <div className="progress-bar">
            <div className="step">
               <p>
                  Basic
               </p>
               <div className="bullet">
                  <span>1</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>
            <div className="step">
               <p>
                  Contact
               </p>
               <div className="bullet">
                  <span>2</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>
            <div className="step">
               <p>
                  Club
               </p>
               <div className="bullet">
                  <span>3</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>
            <div className="step">
               <p>
                  College 
               </p>
               <div className="bullet">
                  <span>4</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>
         </div>
         <div className="form-outer">
            <form action="https://formspree.io/f/xpzvzyor" method="POST">
               <div className="page slide-page">
                 <input type="hidden" name="MEMBERSHIP FORM" id="MEMBERSHIP FORM" value="MEMBERSHIP FORM" />
                  <div className="title">
                     Basic Info:
                  </div>
                  <div className="field">
                     <div className="label">
                        Full Name : <b>*</b>
                     </div>
                     <input type="text" name="Full Name " required>
                  </div>
                                   <div className="field">
                     <div className="label">
Gender <b>*</b>
                     </div>
                     <select name="Gender " required>
                                              <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                     </select>
                  </div>
                                    <div className="field">
                     <div className="label">
                        Religion  <b>*</b>
                     </div>
                     <select name="Religion " required>
                       <option value="">Select</option>
                        <option name="islam" value="Islam">Islam</option>
                        <option name="Hinduism" value="Hinduism">Hinduism</option>
              <option name="Christianity" value="Christianity">Christianity</option>
                                      <option name="Buddhism " value="Buddhism ">Buddhism</option>
                        <option name="other" value="other">Other</option>
                     </select>
                  </div>
                  <div className="field">
                     <button className="firstNext next">Next</button>
                  </div>
               </div>
               <div className="page">
                  <div className="title">
                     Contact Info:
                  </div>
                                    <div className="field">
                     <div className="label">
                         Address : <b>*</b>
                     </div>
                     <input type="text" name="Address" required>
                  </div>
                  <div className="field">
                     <div className="label">
                        Email Address :
                     </div>
                     <input type="email" name="Email Address " >
                  </div>
                  <div className="field">
                     <div className="label">
                        Phone Number : <b>*</b>
                     </div>
                     <input type="number" name="Phone Number" required>
                  </div>
                  <div className="field btns">
                     <button className="prev-1 prev">Previous</button>
                     <button className="next-1 next">Next</button>
                  </div>
               </div>
               <div className="page">
                  <div className="title">
                     Club
                  </div>
                           <div className="field">
                     <div className="label">
                        Date of Birth  <b>*</b>
                     </div>
                     <input type="date" name="Date of Birth" required>
                  </div>  
                                    <div className="field">
                     <div className="label">
                        Why do you want to join these clubs? : <b>*</b>
                     </div>
                     <input type="text" name="Reasons for joining the club " required>
                  </div>
                 

 <div className="field">
                     <div className="label">
                        Which club(s) do you want to join? <b>*</b>
                     </div><select name="Chosed these Clubs  " multiple required>
  <option value="Science Club">Science Club</option>
  <option value="Debate Club">Debate Club</option>
  <option value="EnglishLanguage Club">English Language Club</option>
  <option value="Programming Club">Programming Club</option>
  <option value="Chess Club">Chess Club</option>
  <!-- Add more options as needed -->
</select>
</br>
<div className="desktop-message" style="color:grey"><br />
  <i>*Please press and hold shift to select multiple club*</i>
</div>


                  </div>

                  <div className="field btns">
                     <button className="prev-2 prev">Previous</button>
                     <button className="next-2 next">Next</button>
                  </div>
               </div>
               <div className="page">
                  <div className="title">
                     Student Details:
                  </div>
                  <div className="field">
                     <div className="label">
                        Roll No : <b>*</b>
                     </div>
                     <input type="number" name="Roll No" required>
                  </div>
                  <div className="field">
                     <div className="label">
                        Department : <b>*</b>
                     </div>
                     <input type="text" name="Department" required>
                  </div>
                                     <div className="field">
                     <div className="label">
                        Session <b>*</b>
                     </div>
                   <select name="Session" required>
  <option value="">Select</option>
  <option value="HSC-2023">2021-2022 (HSC-2023)</option>
  <option value="HSC-2024">2022-2023 (HSC-2024)</option>
  <option value="HSC-2025">2023-2024 (HSC-2025)</option>
  <option value="HSC-2026">2024-2025 (HSC-2026)</option>
  <option value="HSC-2027">2025-2026 (HSC-2027)</option>
</select>

                  </div>                 
                  <div className="field btns">
                     <button className="prev-3 prev">Previous</button>
                     <button className="submit">Submit</button>
                  </div>
               </div>
            </form>

         </div>
      </div>
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
