const form = document.querySelector("form");
const name = document.querySelector(".name");
const dob = document.querySelector(".dob");
const sex = document.querySelector(".sex");
const edu = document.querySelector(".edu");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkError();
});

const checkError = () => {
  if (name.value === "") {
    handleError("Please enter your name", name);
  } else {
    removeError(name);
  }
  if (dob.value === "") {
    handleError("Please enter your date of birth", dob);
  } else {
    removeError(dob);
  }
  if (sex.value === "") {
    handleError("Please select an option", sex);
  } else {
    removeError(sex);
  }
  if (edu.value === "") {
    handleError("Please enter your qualification", edu);
  } else {
    removeError(edu);
  }
};
const handleError = (text, input) => {
  const parent = input.parentElement;
  const message = parent.querySelector(".error");
  message.innerText = text;
  message.classList.add("active");
};
const removeError = (input) => {
  const parent = input.parentElement;
  const message = parent.querySelector(".error");
  message?.remove();
};
