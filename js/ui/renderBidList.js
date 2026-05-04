export function renderBidList(bids) {
  const card = document.createElement("div");
  card.className = "bg-white rounded-md shadow-md p-3 w-xs";

  const title = document.createElement("h2");
  title.textContent = "Bid history";
  title.className = "text-text font-semibold border-b border-border mb-2 pb-1";
  card.appendChild(title);

  if (!bids || bids.length === 0) {
    const noBidsMessage = document.createElement("p");
    noBidsMessage.textContent = "No bids yet.";
    noBidsMessage.className = "text-placeholder text-text";
    card.appendChild(noBidsMessage);
    return card;
  }

  const bidList = document.createElement("ul");
  bidList.className = "flex flex-col gap-2";
  bids
    .slice()
    .reverse()
    .forEach((bid) => {
      const bidInfo = document.createElement("li");
      bidInfo.className =
        "flex justify-between items-center text-placeholder text-text border-b border-border pb-1";

      const bidder = document.createElement("span");
      bidder.textContent = `${bid.bidder.name}`;
      bidder.className = "font-medium";

      const amount = document.createElement("span");
      amount.textContent = `${bid.amount} credits`;
      amount.className = "font-semibold";

      bidInfo.append(bidder, amount);
      bidList.appendChild(bidInfo);
    });

  card.appendChild(bidList);

  return card;
}

// Bid overview card showing highest bid, total bids, end date and buttons for bidding, editing and deleting
export function renderBidOverview(listing) {
  const bids = listing.bids;

  const card = document.createElement("div");
  card.className = "bg-white rounded-md shadow-md p-3 w-xs";

  // Title
  const title = document.createElement("h2");
  title.textContent = "Bid on this listing";
  title.className =
    "text-text font-semibold text-lg border-b border-border mb-2 pb-1";

  // Highest bid
  const highestBidContainer = document.createElement("div");
  highestBidContainer.className =
    "flex justify-between items-center my-2 text-text";

  const highestBidText = document.createElement("p");
  highestBidText.textContent = "Highest bid";

  const latestBid = bids.at(-1);
  const highestBidAmount = document.createElement("span");
  highestBidAmount.textContent = latestBid
    ? `${latestBid.amount} credits`
    : "No bids yet";
  highestBidAmount.className = "font-semibold";

  highestBidContainer.append(highestBidText, highestBidAmount);

  // Total bids
  const totalBidsContainer = document.createElement("div");
  totalBidsContainer.className =
    "flex justify-between items-center my-2 text-text";

  const totalBidsText = document.createElement("p");
  totalBidsText.textContent = "Total bids";

  const totalBidsAmount = document.createElement("span");
  totalBidsAmount.textContent = bids ? `${bids.length}` : "0";
  totalBidsAmount.className = "font-semibold";

  totalBidsContainer.append(totalBidsText, totalBidsAmount);

  // End date
  const endContainer = document.createElement("div");
  endContainer.className = "flex justify-between text-text";

  const textIconContainer = document.createElement("div");

  const gavelIcon = document.createElement("span");
  gavelIcon.className = "fa-solid fa-gavel text-text mr-2";

  const endDate = document.createElement("span");
  const endsAt = new Date(listing.endsAt);
  const hasEnded = endsAt < new Date();
  const endText = document.createElement("span");
  endText.textContent = hasEnded ? "Ended:" : "Ends:";
  endDate.textContent = endsAt.toLocaleString();
  endDate.className = "font-semibold";

  textIconContainer.append(gavelIcon, endText);
  endContainer.append(textIconContainer, endDate);

  card.appendChild(title);
  card.appendChild(highestBidContainer);
  card.appendChild(totalBidsContainer);
  card.appendChild(endContainer);

  return card;
}
