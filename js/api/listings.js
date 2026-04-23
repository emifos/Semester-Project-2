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
