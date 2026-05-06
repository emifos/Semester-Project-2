export function renderProfileListings(listings, content) {
  content.innerHTML = "";
  content.className =
    "grid grid-cols-1 mx-auto mt-6 mb-6 gap-4 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 md:gap-6 lg:max-w-4xl";

  if (!listings.length) {
    const empty = document.createElement("p");
    empty.textContent = "No listings yet.";
    empty.className = "col-span-full text-center text-text m-4";
    content.appendChild(empty);
    return;
  }

  listings.forEach((listing) => {
    const card = document.createElement("div");
    card.className =
      "w-full max-w-xs mx-auto relative rounded-md overflow-hidden shadow-md bg-white md:max-w-[260px]";

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Listing image";
    img.className = "w-full h-55 object-cover";

    const button = document.createElement("a");
    button.textContent = "View more";
    button.href = "";
    button.className =
      "absolute top-2 right-2 bg-accent text-white text-sm px-2 py-2 rounded-md z-10";
    button.href = `/single-listing.html?id=${listing.id}`;

    const overlay = document.createElement("div");
    overlay.className = "w-full bg-black/70 text-white p-2";

    const title = document.createElement("h3");
    title.textContent = listing.title;
    title.className = " font-medium text-base";

    const ends = document.createElement("p");
    ends.textContent = `Ends: ${new Date(listing.endsAt).toLocaleString()}`;
    ends.className = "text-sm font-regular";

    overlay.append(title, ends);
    card.append(img, button, overlay);
    content.appendChild(card);
  });
}

export function renderProfileBids(bids, content) {
  content.innerHTML = "";
  content.className =
    "grid grid-cols-1 mx-auto mt-6 mb-6 gap-4 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 md:gap-6 lg:max-w-4xl";

  if (!bids.length) {
    const empty = document.createElement("p");
    empty.textContent = "No bids yet.";
    empty.className = "col-span-full text-center text-text m-4";
    content.appendChild(empty);
    return;
  }

  bids.forEach((bid) => {
    const listing = bid.listing;
    if (!listing) return;

    const card = document.createElement("div");
    card.className =
      "w-full max-w-xs mx-auto relative rounded-md overflow-hidden shadow-md bg-white md:max-w-[260px]";

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Bid listing image";
    img.className = "w-full h-55 object-cover";

    const button = document.createElement("a");
    button.textContent = "View more";
    button.href = "";
    button.className =
      "absolute top-2 right-2 bg-accent text-white text-sm px-2 py-2 rounded-md z-10";
    button.href = `/single-listing.html?id=${listing.id}`;

    const overlay = document.createElement("div");
    overlay.className = "w-full bg-black/70 text-white p-2";

    const title = document.createElement("h3");
    title.textContent = listing.title;
    title.className = "font-medium text-base";

    const ends = document.createElement("p");
    ends.textContent = `Ends: ${new Date(listing.endsAt).toLocaleString()}`;
    ends.className = "text-sm font-regular";

    const amount = document.createElement("p");
    amount.textContent = `Your bid: ${bid.amount}`;
    amount.className = "font-bold mt-2";

    overlay.append(title, ends, amount);
    card.append(img, button, overlay);
    content.appendChild(card);
  });
}

export function renderProfileWins(wins, content) {
  content.innerHTML = "";
  content.className =
    "grid grid-cols-1 mx-auto mt-6 mb-6 gap-4 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 md:gap-6 lg:max-w-4xl";

  if (!wins.length) {
    const empty = document.createElement("p");
    empty.textContent = "No wins yet.";
    empty.className = "col-span-full text-center text-text m-4";
    content.appendChild(empty);
    return;
  }

  wins.forEach((listing) => {
    const card = document.createElement("div");
    card.className =
      "w-full max-w-xs mx-auto relative rounded-md overflow-hidden shadow-md bg-white md:max-w-[260px]";

    const img = document.createElement("img");
    img.src = listing.media?.[0]?.url || "/images/placeholder-img.jpg";
    img.alt = listing.media?.[0]?.alt || "Win listing image";
    img.className = "w-full h-55 object-cover";

    const button = document.createElement("a");
    button.textContent = "View more";
    button.href = "";
    button.className =
      "absolute top-2 right-2 bg-accent text-white text-sm px-2 py-2 rounded-md z-10";
    button.href = `/single-listing.html?id=${listing.id}`;

    const overlay = document.createElement("div");
    overlay.className = "w-full bg-black/70 text-white p-2";

    const title = document.createElement("h3");
    title.textContent = listing.title;
    title.className = "font-medium text-base";

    const bidCount = document.createElement("p");
    const count = listing._count?.bids || listing.bids?.length || 0;
    bidCount.textContent = `Bids: ${count}`;
    bidCount.className = "font-bold mt-2";

    overlay.append(title, bidCount);
    card.append(img, button, overlay);
    content.appendChild(card);
  });
}
