import { showAlert } from "../utils/alert.js";
import { bidOnListing } from "../api/bids.js";

export async function handleBidClick(e) {
  if (!e.target.matches("[data-place-bid]")) return;

  const container = e.target.closest("[data-bid-container]");
  const input = container.querySelector("[data-bid-input]");

  const amount = Number(input.value);
  const listingId = e.target.dataset.listingId;

  const highestBid = Number(e.target.dataset.highestBid);

  if (!amount || amount <= 0) {
    showAlert("Enter a valid bid", "error", 3000);
    return;
  }

  if (amount <= highestBid) {
    showAlert(`Bid must be higher than ${highestBid}.`, "error", 3000);
    return;
  }

  try {
    await bidOnListing(listingId, amount);
    showAlert("Bid placed successfully!", "success", 3000);
    setTimeout(() => {
      location.reload();
    }, 2000);
  } catch (error) {
    showAlert(error.message || "Failed to place bid", "error", 3000);
  }
}

export function initBidEvents() {
  document.addEventListener("click", handleBidClick);
}
