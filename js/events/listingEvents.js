import { searchListings } from "../api/listings.js";
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
  renderListings(response.data);
});
