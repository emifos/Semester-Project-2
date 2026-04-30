import { getSingleListing } from "../api/listings.js";

export async function renderEditListing(id) {
  try {
    const response = await getSingleListing(id);
    const listing = response;

    document.getElementById("listingTitle").value = listing.title || "";
    document.getElementById("listingDescription").value =
      listing.description || "";
    document.getElementById("listingImage").value =
      listing.media?.[0]?.url || "";
    document.getElementById("tags").value = listing.tags?.join(", ") || "";
  } catch (error) {
    console.error("Error fetching listing:", error);
  }
}
