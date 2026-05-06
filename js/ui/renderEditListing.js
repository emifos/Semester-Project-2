import { getSingleListing } from "../api/listings.js";

export async function renderEditListing(id) {
  try {
    const response = await getSingleListing(id);
    const listing = response;

    document.getElementById("listingTitle").value = listing.title || "";
    document.getElementById("listingDescription").value =
      listing.description || "";
    document.getElementById("tags").value = listing.tags?.join(", ") || "";

    const imageContainer = document.getElementById("imageInputContainer");
    imageContainer.innerHTML = "";

    const media = listing.media || [];

    if (media.length === 0) {
      media.push({ url: "" });
    }

    media.forEach((image) => {
      const content = document.createElement("div");
      content.className = "mt-3 flex flex-col gap-1";

      const label = document.createElement("label");
      label.textContent = "Image URL";
      label.className = "text-text font-semibold md:text-lg";

      const input = document.createElement("input");
      input.type = "url";
      input.value = image.url || "";
      input.name = "imageUrl";
      input.placeholder = "Image URL";
      input.className =
        "border-border text-placeholder focus:outline-accent rounded-md border px-2 py-3 text-sm md:text-base";

      content.append(label, input);
      imageContainer.appendChild(content);
    });
  } catch (error) {
    console.error("Error fetching listing:", error);
  }
}
