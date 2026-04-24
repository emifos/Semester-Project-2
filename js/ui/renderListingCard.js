export function renderListingCard(listing) {
  const card = document.createElement("div");
  card.className =
    "listing-card max-w-xs rounded-md break-all bg-white shadow-md relative";

  let image;
  if (listing.media?.length) {
    image = document.createElement("img");
    image.src = listing.media[0].url || "/images/placeholder-img.jpg";
    image.alt = listing.media[0].alt || "Listing Image";
    card.appendChild(image);
    image.className = "w-full rounded-t-md object-cover h-55";
  }

  const endContainer = document.createElement("div");
  endContainer.className =
    "bg-black text-white opacity-75 items-center flex gap-1.5 absolute top-46 p-2 text-sm";

  const gavelIcon = document.createElement("span");
  gavelIcon.className = "fa-solid fa-gavel text-sm";

  const endDate = document.createElement("p");
  endDate.textContent = `Ends: ${new Date(listing.endsAt).toLocaleString()}`;
  endDate.className = "text-sm";
  endContainer.append(gavelIcon, endDate);

  card.appendChild(endContainer);

  const sellerAndTagsContainer = document.createElement("div");
  sellerAndTagsContainer.className = "flex my-1.5 mx-1.5 justify-between";

  const sellerInfo = document.createElement("div");
  sellerInfo.className = "flex basis-49 flex-col text-sm";

  const seller = document.createElement("p");
  seller.textContent = `@${listing.seller.name}`;
  seller.className = "text-text";

  const createdAt = document.createElement("p");
  createdAt.textContent = `Posted ${new Date(listing.created).toLocaleString()}`;
  createdAt.className = "text-xs text-gray-500";

  sellerInfo.append(seller, createdAt);

  const title = document.createElement("h2");
  title.textContent = listing.title;
  title.className = "text-xl font-semibold mt-3 text-text mx-1.5";

  const description = document.createElement("p");
  description.textContent = listing.description;
  description.className = "text-text mb-5 text-base mx-1.5";

  sellerAndTagsContainer.appendChild(sellerInfo);

  let tagsContainer;
  if (listing.tags?.length) {
    tagsContainer = document.createElement("div");
    tagsContainer.className =
      "flex gap-1 flex-wrap justify-center items-center";
    listing.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.textContent = tag;
      tagEl.className =
        "bg-background text-text text-xs px-1.5 border border-border rounded-md py-0";
      tagsContainer.appendChild(tagEl);
    });

    sellerAndTagsContainer.appendChild(tagsContainer);
  }

  card.appendChild(sellerAndTagsContainer);
  card.appendChild(title);
  card.appendChild(description);

  let bidsList;
  if (listing.bids?.length) {
    const recentBids = listing.bids.slice(-3).reverse();
    bidsList = document.createElement("ul");
    bidsList.textContent = "Recent bids:";
    bidsList.className =
      "my-3 text-sm font-semibold text-text border-b border-border mx-1.5";
    recentBids.forEach((bid) => {
      const bidInfo = document.createElement("li");
      bidInfo.className =
        "my-2 text-sm text-text border-t mx-1.5 border-border flex py-1";
      const bidder = document.createElement("span");
      bidder.textContent = `${bid.bidder.name}`;
      bidder.className = "font-normal mx-2";
      const amount = document.createElement("span");
      amount.textContent = `${bid.amount} credits`;
      amount.className = "ml-auto mx-2";
      bidInfo.append(bidder, amount);
      bidsList.appendChild(bidInfo);
      card.appendChild(bidsList);
    });
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex text-center mx-1.5 mb-4";

  const viewMoreButton = document.createElement("a");
  viewMoreButton.textContent = "View more";
  viewMoreButton.className =
    "bg-linear-to-r from-accent w-full to-accent-hover py-1.5 hover:from-accent hover:to-accent cursor-pointer text-white rounded-md";

  buttonContainer.appendChild(viewMoreButton);
  card.appendChild(buttonContainer);

  return card;
}
