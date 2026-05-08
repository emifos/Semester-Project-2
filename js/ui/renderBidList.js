// Bid history card
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
    .sort((a, b) => b.amount - a.amount)
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
export function renderBidOverview(
  listing,
  { canBid, isOwner, highestBid, user },
) {
  const bids = listing.bids;

  const card = document.createElement("div");
  card.className = "bg-white rounded-md shadow-md p-3 w-xs";

  // Title
  if (!isOwner) {
    const title = document.createElement("h2");
    title.textContent = user
      ? "Bid on this listing"
      : "Log in to bid on this listing";
    title.className =
      "text-text font-semibold text-lg border-b border-border mb-2 pb-1";
    card.appendChild(title);
  }

  // Highest bid
  const highestBidContainer = document.createElement("div");
  highestBidContainer.className =
    "flex justify-between items-center my-2 text-text";

  const highestBidText = document.createElement("p");
  highestBidText.textContent = "Highest bid";

  const highestAmount = bids.length
    ? Math.max(...bids.map((bid) => bid.amount))
    : null;
  const highestBidAmount = document.createElement("span");
  highestBidAmount.textContent = highestAmount
    ? `${highestAmount} credits`
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

  card.appendChild(highestBidContainer);
  card.appendChild(totalBidsContainer);
  card.appendChild(endContainer);

  // Place a bid if logged in
  if (canBid && !hasEnded) {
    const bidInputContainer = document.createElement("div");
    bidInputContainer.className = "flex gap-3 justify-between my-5";
    bidInputContainer.dataset.bidContainer = "";

    const bidInputLabel = document.createElement("label");
    bidInputLabel.textContent = "Enter your bid";
    bidInputLabel.className = "sr-only";

    const bidInput = document.createElement("input");
    bidInput.type = "number";
    bidInput.placeholder = "Enter your bid";
    bidInput.className =
      "border-border text-placeholder focus:outline-accent text-text cursor-pointer rounded-md border px-2 py-3 text-sm";
    bidInput.dataset.bidInput = "";

    const placeBidButton = document.createElement("button");
    placeBidButton.textContent = "Place bid";
    placeBidButton.className =
      "bg-accent hover:from-accent hover:to-accent-hover cursor-pointer px-3 rounded-md font-medium text-white hover:bg-linear-to-r";
    placeBidButton.dataset.placeBid = "";
    placeBidButton.dataset.listingId = listing.id;
    placeBidButton.dataset.highestBid = highestBid;

    bidInputContainer.append(bidInputLabel, bidInput, placeBidButton);
    card.appendChild(bidInputContainer);
  }

  // Edit and delete button for logged in user
  if (isOwner) {
    const toolContainer = document.createElement("div");
    toolContainer.className = "flex justify-between my-5 gap-3";

    const editButton = document.createElement("a");
    editButton.href = `/edit-listing.html?id=${listing.id}`;
    editButton.textContent = "Edit listing";
    editButton.className =
      "bg-accent hover:from-accent hover:to-accent-hover cursor-pointer px-7 py-2 rounded-md text-white hover:bg-linear-to-r";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete listing";
    deleteButton.className =
      "border border-accent rounded-md text-accent px-5 cursor-pointer hover:from-accent hover:to-accent-hover hover:bg-linear-to-r hover:text-white";
    deleteButton.dataset.delete = listing.id;

    toolContainer.append(editButton, deleteButton);
    card.appendChild(toolContainer);
  }

  return card;
}
