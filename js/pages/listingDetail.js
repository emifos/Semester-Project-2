import { getSingleListing } from "../api/listings.js";
import { renderSingleListing } from "../ui/renderSingleListing.js";

const container = document.getElementById("singleListingCard");

export function renderListingCard(listing) {
  container.innerHTML = "";

  const card = renderSingleListing(listing);
  container.appendChild(card);
}

export async function initSingleListing() {
  const params = new URLSearchParams(window.location.search);
  const listingId = params.get("id");

  if (!listingId) {
    throw new Error("No listing ID provided in the URL");
  }

  const response = await getSingleListing(listingId);
  renderListingCard(response);
}

initSingleListing();
