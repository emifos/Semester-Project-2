import {
  searchListings,
  filterListingsByTag,
  getActiveListings,
  getAllListings,
} from "../api/listings.js";
import { renderListings, initListings } from "../pages/listings.js";

// Search for listings event listener
const searchInput = document.getElementById("searchListings");

searchInput.addEventListener("input", async (e) => {
  const query = searchInput.value.trim();

  if (!query) {
    await initListings();
    return;
  }

  const response = await searchListings(query);
  renderListings(response);
});

// Filter by tag event listener
const tagInput = document.getElementById("filterListings");

tagInput.addEventListener("input", async (e) => {
  const tag = tagInput.value.trim();

  if (!tag) {
    await initListings();
    return;
  }

  const response = await filterListingsByTag(tag);
  renderListings(response);
});

// Sort by event listener
const sortSelect = document.getElementById("sortListings");

sortSelect.addEventListener("change", async (e) => {
  const sortValue = sortSelect.value;

  let response;

  switch (sortValue) {
    case "created:desc":
      response = await getAllListings();
      break;
    case "created:asc":
      response = await getAllListings();
      response.sort((a, b) => new Date(a.created) - new Date(b.created));
      break;
    case "active:desc":
      response = await getActiveListings();
      break;
    case "ended":
      response = await getAllListings();
      response = response.filter(
        (listing) => new Date(listing.endsAt) < new Date(),
      );
  }

  renderListings(response);
});
