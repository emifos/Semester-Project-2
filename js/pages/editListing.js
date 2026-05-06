import { authGuard } from "../utils/authGuard.js";
import { renderEditListing } from "../ui/renderEditListing.js";
import { setUpEditListingEvents } from "../events/editListingEvents.js";
import { setupAddImageEvent } from "../events/createListingEvents.js";
import { setupHeader } from "../index.js";

authGuard();
setupHeader();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  console.error("No listing ID provided in URL.");
} else {
  await renderEditListing(id);
  setupAddImageEvent();
  setUpEditListingEvents(id);
}
