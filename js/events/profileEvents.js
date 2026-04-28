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

  function setActiveTab(activeTab) {
    const tabs = [listingsTab, bidsTab, winsTab];
    tabs.forEach((tab) => {
      tab.classList.remove("border-b-2", "border-accent");
    });

    activeTab.classList.add("border-b-2", "border-accent");
  }

  //Listings
  listingsTab.addEventListener("click", async () => {
    setActiveTab(listingsTab);
    try {
      const response = await getProfileListings(name);
      renderProfileListings(response.data, content);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  });

  //Bids
  bidsTab.addEventListener("click", async () => {
    setActiveTab(bidsTab);
    try {
      const response = await getProfileBids(name);
      renderProfileBids(response.data, content);
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  });

  //Wins
  winsTab.addEventListener("click", async () => {
    setActiveTab(winsTab);
    try {
      const response = await getProfileWins(name);
      renderProfileWins(response.data, content);
    } catch (error) {
      console.error("Error fetching wins:", error);
    }
  });

  // Edit profile Button 
  if (editButton) {
    editButton.addEventListener("click", () => {
      window.location.href = "/edit-profile.html";
    });
  }

  //Default - Listings
  listingsTab.click();
}
