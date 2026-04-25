export function renderProfileListings(listings, content) {
  content.innerHTML = "";

  if (!listings.length) {
    content.textContent = "No Listings yet.";
    return;
  }

  listings.forEach((listing) => {
    const card = document.createElement("div");
    card.className = "";

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Listing image";
    img.className = "";

    const title = document.createElement("h3");
    title.textContent = listing.title;
    title.className = "";

    const ends = document.createElement("p");
    ends.textContent = `Ends: ${new Date(listing.endsAt).toLocaleString()}`;
    ends.className = "";

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
    card.className = "";

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Bid listing image";
    img.className = "";

    const title = document.createElement("h3");
    title.textContent = listing.title;
    title.className = "";

    const ends = document.createElement("p");
    ends.textContent = `Ends: ${new Date(listing.endsAt).toLocaleString()}`;
    ends.className = "";

    const amount = document.createElement("p");
    amount.textContent = `Your bid: ${bid.amount}`;
    amount.className = "";

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
    card.className = "";

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Win listing image";
    img.className = "";

    const title = document.createElement("h3");
    title.textContent = listing.title;
    title.className = "";

    const bidCount = document.createElement("p");
    const count = listing._count?.bids || listing.bids?.length || 0;
    bidCount.textContent = `Bids: ${count}`;
    bidCount.className = "";

    card.appendChild(img, title, bidCount);
    content.appendChild(card);
  });
}
