import { getSingleListing } from "../api/listings.js";
import { renderSingleListing } from "../ui/renderSingleListing.js";
import { changeMainImage } from "../events/singleListingEvents.js";
import { renderBidList, renderBidOverview } from "../ui/renderBidList.js";

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

  const response = await getSingleListing(listingId);
  renderListingCard(response);

  const bidContainer = document.getElementById("bidHistory");
  bidContainer.innerHTML = "";

  const bidList = renderBidList(response.bids);
  bidContainer.appendChild(bidList);

  const bidOverviewContainer = document.getElementById("bidOverview");
  bidOverviewContainer.innerHTML = "";

  const bidOverview = renderBidOverview(response);
  bidOverviewContainer.appendChild(bidOverview);
}

changeMainImage();
initSingleListing();
