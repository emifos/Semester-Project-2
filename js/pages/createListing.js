import { authGuard } from "../utils/authGuard.js";
import { setupAddImageEvent } from "../events/createListingEvents.js";
import { createListingEvent } from "../events/createListingEvents.js";
import { setupHeader } from "../index.js";

authGuard();
setupHeader();
setupAddImageEvent();
createListingEvent();
