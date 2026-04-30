import { get, post, put, del } from "./apiClient.js";

// All listings
export async function getAllListings() {
  try {
    const listings = await get(
      "/auction/listings?_seller=true&_bids=true&sort=created&sortOrder=desc",
    );
    return listings.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Search listings by title or description properties
export async function searchListings(query) {
  try {
    const listings = await get(
      `/auction/listings/search?q=${encodeURIComponent(query)}&_seller=true&_bids=true&sort=created&sortOrder=desc`,
    );
    return listings.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Filter listings by tag
export async function filterListingsByTag(tag) {
  try {
    const listings = await get(
      `/auction/listings?_tag=${encodeURIComponent(tag)}&_seller=true&_bids=true&sort=created&sortOrder=desc`,
    );
    return listings.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Create listing
export async function createListing(listingData) {
  try {
    const listing = await post("/auction/listings", listingData);
    return listing;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Get active listings
export async function getActiveListings() {
  try {
    const listing = await get(
      "/auction/listings?_active=true&_seller=true&_bids=true&sort=created&sortOrder=desc",
    );
    return listing.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Update listing
export async function updateListing(id, updatedData) {
  try {
    const listing = await put(`/auction/listings/${id}`, updatedData);
    return listing;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Delete listing
export async function deleteListing(id) {
  try {
    await del(`/auction/listings/${id}`);
    return true;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
