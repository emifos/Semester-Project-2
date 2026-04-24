export function renderProfileListings(listings, content) {
  content.innerHTML = "";

  if (!listings.length) {
    content.textContent = "No Listings yet.";
    return;
  }

  listings.forEach((listing) => {
    const card = document.createElement("div");
    card.classList.add("listing-thumbnail");

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Listing image";

    const title = document.createElement("h3");
    title.textContent = listing.title;

    const ends = document.createElement("p");
    ends.textContent = `Ends: ${new Date(listing.endsAt).toLocaleString()}`;

    card.append(img, title, ends);
    content.appendChild(card);
  });
}

export function renderProfileBids(bids, content) {
  content.innerHTML = "";

  if (!bids.length) {
    content.textContent = "No bids yet.";
    return;
  }

  bids.forEach((bid) => {
    const listing = bid.listing;

    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Bid listing image";

    const title = document.createElement("h3");
    title.textContent = listing.title;

    const ends = document.createElement("p");
    ends.textContent = `Ends: ${new Date(listing.endsAt).toLocaleString()}`;

    const amount = document.createElement("p");
    amount.textContent = `Your bid: ${bid.amount}`;

    card.append(img, title, ends, amount);
    content.appendChild(card);
  });
}

export function renderProfileWins(wins, content) {
  content.innerHTML = "";

  if (!wins.length) {
    content.textContent = "No wins yet.";
    return;
  }

  wins.forEach((listing) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Win listing image";

    const title = document.createElement("h3");
    title.textContent = listing.title;

    const bidCount = document.createElement("p");
    const count = listing._count?.bids || listing.bids?.length || 0;
    bidCount.textContent = `Bids: ${count}`;

    card.appendChild(img, title, bidCount);
    content.appendChild(card);
  });
}
