export function renderListingCard(listing) {
  const card = document.createElement("div");
  card.className =
    "listing-card max-w-xs rounded-md break-all bg-white shadow-md relative";

  let image;
  if (listing.media?.length) {
    image = document.createElement("img");
    image.src = listing.media[0].url;
    image.alt = listing.media[0].alt || "Listing Image";
    card.appendChild(image);
    image.className = "w-full object-cover h-55";
  }

  const endDate = document.createElement("p");
  endDate.textContent = `Ends: ${new Date(listing.endsAt).toLocaleString()}`;
  endDate.className =
    "bg-black text-white opacity-70 absolute top-46 p-2 text-sm";

  const seller = document.createElement("p");
  seller.textContent = `@${listing.seller.name}`;

  const createdAt = document.createElement("p");
  createdAt.textContent = `Posted ${new Date(listing.created).toLocaleString()}`;

  const title = document.createElement("h2");
  title.textContent = listing.title;

  const description = document.createElement("p");
  description.textContent = listing.description;

  card.appendChild(endDate);
  card.appendChild(seller);
  card.appendChild(createdAt);

  let tags;
  if (listing.tags?.length) {
    tags = document.createElement("p");
    tags.textContent = `${listing.tags}`;
    tags.className = "bg-background text-text";
    card.appendChild(tags);
  }

  card.appendChild(title);
  card.appendChild(description);

  let bidsList;
  if (listing.bids?.length) {
    const recentBids = listing.bids.slice(-3).reverse();
    bidsList = document.createElement("ul");
    recentBids.forEach((bid) => {
      const bidder = document.createElement("li");
      bidder.textContent = `${bid.bidder.name} ${bid.amount} credits`;
      bidsList.appendChild(bidder);
      card.appendChild(bidsList);
    });
  }

  return card;
}
