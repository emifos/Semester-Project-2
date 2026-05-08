export function renderSingleListing(listing) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-md shadow-md p-3 w-xs md:w-md lg:w-2xl p-5";

  // Images
  const media = listing.media?.length ? listing.media : [];

  // Big image
  const bigImage = document.createElement("img");
  const bigImageUrl = media[0]?.url;
  bigImage.className = "w-2xl object-cover h-100";
  bigImage.onerror = () => {
    bigImage.src = "./images/placeholder-img.jpg";
  };

  bigImage.src =
    bigImageUrl && bigImageUrl.trim() !== ""
      ? bigImageUrl
      : "./images/placeholder-img.jpg";

  bigImage.alt = media[0]?.alt || "Listing Image";

  const bigImageContainer = document.createElement("div");
  bigImageContainer.className = "relative";

  bigImage.dataset.index = 0;
  bigImage.dataset.role = "main-image";

  // Navigation buttons
  const prevButton = document.createElement("i");
  prevButton.className =
    "fa-solid fa-chevron-left absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer bg-black opacity-75 text-white py-2 px-2.5";

  const nextButton = document.createElement("i");
  nextButton.className =
    "fa-solid fa-chevron-right absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer bg-black opacity-75 text-white py-2 px-2.5";

  prevButton.dataset.action = "prev";
  nextButton.dataset.action = "next";

  bigImageContainer.appendChild(bigImage);

  if (media.length > 1) {
    bigImageContainer.append(prevButton, nextButton);
  }

  bigImageContainer.dataset.carousel = "true";
  bigImageContainer.dataset.media = JSON.stringify(media);

  card.appendChild(bigImageContainer);

  // Small images
  const smallImagesContainer = document.createElement("div");
  smallImagesContainer.className = "flex flex-wrap gap-2 mt-2";

  media.forEach((item) => {
    const smallImage = document.createElement("img");
    smallImage.src =
      item.url && item.url.trim() !== ""
        ? item.url
        : "./images/placeholder-img.jpg";

    smallImage.onerror = () => {
      smallImage.src = "./images/placeholder-img.jpg";
    };

    smallImage.className = "w-20 lg:w-30 object-cover h-20 lg:h-30";
    smallImage.alt = item?.alt || "Listing Image";

    smallImagesContainer.appendChild(smallImage);
  });

  card.appendChild(smallImagesContainer);

  // Title and description
  const title = document.createElement("h2");
  title.textContent = listing.title;
  title.className =
    "text-header-mobile mt-2 lg:mt-5 md:text-2xl font-semibold text-text";
  card.appendChild(title);

  const description = document.createElement("p");
  description.textContent = listing.description;
  description.className = "text-text mt-1";
  card.appendChild(description);

  // Tags
  let tagsContainer;
  if (listing.tags?.length) {
    tagsContainer = document.createElement("div");
    tagsContainer.className = "flex gap-1 flex-wrap items-center mt-8 mb-5";
    listing.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.textContent = tag;
      tagEl.className =
        "bg-background text-text text-xs px-1.5 border border-border rounded-md py-0";
      tagsContainer.appendChild(tagEl);
    });
    card.appendChild(tagsContainer);
  }

  // Seller and created date
  const sellerInfo = document.createElement("div");
  sellerInfo.className = "flex justify-between items-center mt-4";
  const seller = document.createElement("p");
  seller.textContent = `Listed by @${listing.seller.name}`;
  seller.className = "text-text text-sm";

  const createdAt = document.createElement("p");
  createdAt.textContent = `Posted ${new Date(listing.created).toLocaleString()}`;
  createdAt.className = "text-xs text-gray-500";

  sellerInfo.append(seller, createdAt);
  card.appendChild(sellerInfo);

  return card;
}
