import {
  getProfileListings,
  getProfileBids,
  getProfileWins,
} from "../api/profiles.js";
import {
  renderProfileListings,
  renderProfileBids,
  renderProfileWins,
} from "../ui/renderProfileListings.js";

export function setupProfileEvents(name) {
  const content = document.getElementById("content");
  const listingsTab = document.getElementById("listingsTab");
  const bidsTab = document.getElementById("bidsTab");
  const winsTab = document.getElementById("winsTab");
  const editButton = document.getElementById("editButton");

  //Listings
  listingsTab.addEventListener("click", async () => {
    try {
      const response = await getProfileListings(name);
      renderProfileListings(response.data, content);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  });

  //Bids
  bidsTab.addEventListener("click", async () => {
    try {
      const response = await getProfileBids(name);
      renderProfileBids(response.data, content);
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  });

  //Wins
  winsTab.addEventListener("click", async () => {
    try {
      const response = await getProfileWins(name);
      renderProfileWins(response.data, content);
    } catch (error) {
      console.error("Error fetching wins:", error);
    }
  });

  // Edit profile Button (Unfinished)
  if (editButton) {
    editButton.addEventListener("click", () => {});
  }

  //Default - Listings
  listingsTab.click();
}
