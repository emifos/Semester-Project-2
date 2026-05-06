import { getSingleListing } from "../api/listings.js";
import { renderSingleListing } from "../ui/renderSingleListing.js";
import {
  changeMainImage,
  initDeleteModal,
} from "../events/singleListingEvents.js";
import { renderBidList, renderBidOverview } from "../ui/renderBidList.js";
import { getAccessToken, getUser } from "../utils/storage.js";
import { initBidEvents } from "../events/bidEvents.js";

const container = document.getElementById("singleListingCard");

export function renderListingCard(listing) {
  container.innerHTML = "";

  const card = renderSingleListing(listing);
  container.appendChild(card);
}

export async function initSingleListing() {
  const params = new URLSearchParams(window.location.search);
  const listingId = params.get("id");

  if (!listingId) {
    throw new Error("No listing ID provided in the URL");
  }

  const listing = await getSingleListing(listingId);
  renderListingCard(listing);

  const bidContainer = document.getElementById("bidHistory");
  bidContainer.innerHTML = "";

  const bidList = renderBidList(listing.bids);
  bidContainer.appendChild(bidList);

  const user = getUser();
  const token = getAccessToken();

  const isLoggedIn = !!token;
  const isOwner = listing?.seller.name === user.name;

  const canBid = isLoggedIn && !isOwner;

  const bidOverviewContainer = document.getElementById("bidOverview");
  bidOverviewContainer.innerHTML = "";

  const highestBid = listing.bids?.at(-1)?.amount ?? 0;

  const bidOverview = renderBidOverview(listing, {
    canBid,
    isOwner,
    highestBid,
  });
  bidOverviewContainer.appendChild(bidOverview);

  initDeleteModal();
}

changeMainImage();
initSingleListing();
initBidEvents();
