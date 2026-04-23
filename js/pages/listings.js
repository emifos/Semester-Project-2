import { getAllListings } from "../api/listings.js";
import { renderListingCard } from "../ui/renderListingCard.js";

const container = document.getElementById("listingCards");

async function initListings() {
  const response = await getAllListings();
  const listings = response.data;

  container.innerHTML = "";

  listings.forEach((listing) => {
    const card = renderListingCard(listing);
    container.appendChild(card);
  });
}

initListings();
