export function renderSingleListing(listing) {
  const card = document.createElement("div");
  const media = listing.media?.length ? listing.media : [];

  const bigImage = document.createElement("img");

  const firstImage = media[0]?.url;
  bigImage.src =
    firstImage && firstImage.trim() !== ""
      ? firstImage
      : "/images/placeholder-img.jpg";

  bigImage.onerror = () => {
    bigImage.src = "/images/placeholder-img.jpg";
  };

  bigImage.alt = media[0]?.alt || "Listing Image";

  card.appendChild(bigImage);

  const smallImagesContainer = document.createElement("div");

  media.slice(1).forEach((item) => {
    const smallImage = document.createElement("img");
    smallImage.src =
      item.url && item.url.trim() !== ""
        ? item.url
        : "/images/placeholder-img.jpg";

    smallImage.onerror = () => {
      smallImage.src = "/images/placeholder-img.jpg";
    };

    smallImage.alt = item?.alt || "Listing Image";

    smallImagesContainer.appendChild(smallImage);
  });

  card.appendChild(smallImagesContainer);

  const title = document.createElement("h2");
  title.textContent = listing.title;
  card.appendChild(title);

  const description = document.createElement("p");
  description.textContent = listing.description;
  card.appendChild(description);

  let tagsContainer;
  if (listing.tags?.length) {
    tagsContainer = document.createElement("div");
    tagsContainer.className = "flex gap-1";
    listing.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.textContent = tag;
      tagEl.className = "bg-background text-text";
      tagsContainer.appendChild(tagEl);
    });
    card.appendChild(tagsContainer);
  }

  const sellerInfo = document.createElement("div");
  const seller = document.createElement("p");
  seller.textContent = `Listed by @${listing.seller.name}`;

  const createdAt = document.createElement("p");
  createdAt.textContent = `Posted ${new Date(listing.created).toLocaleString()}`;

  sellerInfo.append(seller, createdAt);
  card.appendChild(sellerInfo);

  return card;
}
