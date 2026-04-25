import { getProfile } from "../api/profiles.js";
import { renderProfile } from "../ui/renderProfile.js";
import { setupProfileEvents } from "../events/profileEvents.js";

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

const profile = await getProfile(name);

const { container } = renderProfile(profile);

const profileCard = document.getElementById("profileCard");

profileCard.appendChild(container);

setupProfileEvents(name);
