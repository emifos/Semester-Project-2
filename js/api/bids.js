import { post } from "./apiClient.js";

// Bid on listing
export async function bidOnListing(listingId, amount) {
  return await post(`/auction/listings/${listingId}/bids`, {
    amount,
  });
}
