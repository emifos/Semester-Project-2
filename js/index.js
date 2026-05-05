import { renderHeader } from "./ui/renderHeader.js";
import { getUser } from "./utils/storage.js";

export function setupHeader() {
  const headerContainer = document.getElementById("header");

  const user = getUser();
  const isLoggedIn = !!user;
  const isProfilePage = window.location.pathname.includes("profile");

  headerContainer.innerHTML = "";
  headerContainer.appendChild(renderHeader(isLoggedIn, user, isProfilePage));

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}
