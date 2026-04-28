import { authGuard } from "../utils/authGuard.js";
import { setupAddImageEvent } from "../events/createListingEvents.js";
import { createListingEvent } from "../events/createListingEvents.js";

authGuard();
setupAddImageEvent();
createListingEvent();
