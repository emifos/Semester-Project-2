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

export function setupProfileEvents(profile) {
  const name = profile.data.name;

  const content = document.getElementById("content");
  const listingsTab = document.getElementById("listingsTab");
  const winsTab = document.getElementsByName("winsTab");
  const editButton = document.getElementById("editButton");

  //Listings 
  listingsTab.addEventListener("click", async () => {
    try {
        const response = await getProfileListings(name);
        renderProfileListings(response.data, content);
    } catch (error){
        console.error("Error fetching listings:", error);
    }
  });
  
}
