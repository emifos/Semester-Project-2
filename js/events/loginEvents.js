import { loginUser } from "../api/auth.js";
import { isValidEmail, isValidPassword } from "../utils/validation.js";
import { setAccessToken, setUser } from "../utils/storage.js";

export function handleLogin() {
  const form = document.getElementById("loginForm");

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

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

    const emailCheck = isValidEmail(emailInput.value);
    const passwordCheck = isValidPassword(passwordInput.value);

    emailError.textContent = emailCheck.message;
    passwordError.textContent = passwordCheck.message;

    if (!emailCheck.valid || !passwordCheck.valid) {
      return;
    }

    const credentials = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    try {
      const data = await loginUser(credentials);

      setAccessToken(data.data.accessToken);
      setUser(data.data);

      alert("Login successful!");
      window.location.href = "/index.html";
    } catch (error) {
      console.error("Login request failed:", error);
      alert(error.message || "Something went wrong. Please try again later");
    }
  });
}
