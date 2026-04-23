import { registerUser } from "../api/auth.js";
import {
  isValidName,
  isValidEmail,
  isValidPassword,
} from "../utils/validation.js";

export function handleRegister() {
  const form = document.getElementById("registerForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  nameInput.addEventListener("blur", () => {
    const result = isValidName(nameInput.value);
    nameError.textContent = result.message;
  });

  emailInput.addEventListener("blur", () => {
    const result = isValidEmail(emailInput.value);
    emailError.textContent = result.message;
  });

  passwordInput.addEventListener("blur", () => {
    const result = isValidPassword(passwordInput.value);
    passwordError.textContent = result.message;
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nameCheck = isValidName(nameInput.value);
    const emailCheck = isValidEmail(emailInput.value);
    const passwordCheck = isValidPassword(passwordInput.value);

    nameError.textContent = nameCheck.message;
    emailError.textContent = emailCheck.message;
    passwordError.textContent = passwordCheck.message;

    if (!nameCheck.valid || !emailCheck.valid || !passwordCheck.valid) {
      return;
    }

    const userData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    try {
      await registerUser(userData);
      alert("Registration was successful, you can now log in!");
      window.location.href = "/login.html";
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message || "Something went wrong. Please try again later");
    }
  });
}
