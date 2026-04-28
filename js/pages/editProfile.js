import { authGuard } from "../utils/authGuard.js";
import { renderEditProfile } from "../ui/renderEditProfile.js";
import { setupEditProfileEvents } from "../events/editProfileEvents.js";
import { getUser } from "../utils/storage.js";

authGuard();

const user = getUser();
const name = user.name;

renderEditProfile(name);
setUpEditProfileEvents(name);
