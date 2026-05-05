import { authGuard } from "../utils/authGuard.js";
import { renderEditProfile } from "../ui/renderEditProfile.js";
import { setupEditProfileEvents } from "../events/editProfileEvents.js";
import { getUser } from "../utils/storage.js";
import { setupHeader } from "../index.js";

authGuard();
setupHeader();

const user = getUser();
const name = user.name;

renderEditProfile(name);
setupEditProfileEvents(name);
