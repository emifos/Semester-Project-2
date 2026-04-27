import { getProfile } from "../api/profiles.js";
import { renderProfile } from "../ui/renderProfile.js";
import { setupProfileEvents } from "../events/profileEvents.js";
import { getUser } from "../utils/storage.js";

const user = getUser();

if (!user) {
  window.location.href = "/login.html";
}

const name = user.name;

const profile = await getProfile(name);

const { container } = renderProfile(profile);

const profileCard = document.getElementById("profileCard");
profileCard.appendChild(container);

setupProfileEvents(name);

console.log(getUser());
