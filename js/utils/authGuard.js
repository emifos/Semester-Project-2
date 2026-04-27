import { getAccessToken } from "./storage.js";

export function authGuardUI() {
  const createButton = document.getElementById("createListingButton");
  if (!createButton) return;

  if (!getAccessToken()) {
    createButton.classList.add("hidden");
  } else {
    createButton.classList.remove("hidden");
  }
}

export function authGuard() {
  if (!getAccessToken()) {
    window.location.href = "./index.html";
  }
}
