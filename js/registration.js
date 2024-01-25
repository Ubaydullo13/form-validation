import { validateInputs, getData } from "./functions.js";

const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const year = document.getElementById("year");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs({
    firstName,
    lastName,
    username,
    year,
    email,
    password,
    confirmPassword,
  });
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    year: year.value,
    email: email.value,
    username: username.value,
    password: password.value,
  }

  let data = getData();
  data.push(user);

  localStorage.setItem("users", JSON.stringify(data));

  let domain = window.location.href.substring(0, window.location.href.search('registration'));
  form.reset();
        window.location.assign(`${domain}login.html`)
});
