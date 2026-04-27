import { get } from "./apiClient.js";

// All listings
export async function getAllListings() {
  try {
    const listings = await get("/auction/listings?_seller=true&_bids=true");
    return listings;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Search listings by title or description properties
export async function searchListings(query) {
  try {
    const listings = await get(
      `/auction/listings/search?q=${encodeURIComponent(query)}&_seller=true&_bids=true`,
    );
    return listings;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
