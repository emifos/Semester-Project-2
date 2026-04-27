import { getAllListings } from "../api/listings.js";
import { renderListingCard } from "../ui/renderListingCard.js";
import "../events/listingEvents.js";
import { authGuardUI } from "../utils/authGuard.js";

authGuardUI();

const container = document.getElementById("listingCards");

export function renderListings(listings) {
  container.innerHTML = "";

  listings.forEach((listing) => {
    const card = renderListingCard(listing);
    container.appendChild(card);
  });
}

export async function initListings() {
  const response = await getAllListings();
  renderListings(response.data);
}

initListings();
