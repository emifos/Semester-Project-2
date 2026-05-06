import { renderHeader } from "./ui/renderHeader.js";
import { getUser } from "./utils/storage.js";
import { getProfile } from "./api/profiles.js";

export async function setupHeader() {
  const headerContainer = document.getElementById("header");

  const storedUser = getUser();
  const isLoggedIn = !!storedUser;
  const isProfilePage = window.location.pathname.includes("profile");

  let profile = null;

  //Fetch profile data from API if the user is logged in.
  if(isLoggedIn) {
    profile = await getProfile(storedUser.name);
  }

  headerContainer.innerHTML = "";
  headerContainer.appendChild(renderHeader(isLoggedIn, profile, isProfilePage));

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}
