import { createListing } from "../api/listings.js";

// Add images to create listing form
export function setupAddImageEvent() {
  const addImageButton = document.getElementById("addImageButton");
  const imageContainer = document.getElementById("imageInputContainer");

  if (!addImageButton || !imageContainer) return;

  addImageButton.addEventListener("click", () => {
    const imageContent = document.createElement("div");
    imageContent.className = "mt-3 flex flex-col gap-1";

    const imageLabel = document.createElement("label");
    imageLabel.textContent = "Image URL:";
    imageLabel.className = "text-text font-semibold md:text-lg";

    const imageInput = document.createElement("input");
    imageInput.type = "url";
    imageInput.id = "imageListing";
    imageInput.name = "imageUrl";
    imageInput.placeholder = "Image URL";
    imageInput.className =
      "border-border text-placeholder focus:outline-accent rounded-md border px-2 py-3 text-sm md:text-base";

    imageContent.append(imageLabel, imageInput);
    imageContainer.appendChild(imageContent);
  });
}

// Create listing form submission event listener
export async function createListingEvent() {
  const form = document.getElementById("createListingForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const title = document.getElementById("listingTitle").value.trim();
      const description = document
        .getElementById("listingDescription")
        .value.trim();
      const imageUrl = document.getElementById("listingImage").value.trim();
      const tags = document.getElementById("tags").value.trim();
      const rawDate = document.getElementById("endDate").value;
      const endsAt = rawDate ? new Date(rawDate).toISOString() : null;

      const listingData = {
        title,
        description,
        media: imageUrl ? [{ url: imageUrl }] : [],
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        endsAt,
      };

      await createListing(listingData);
      alert("Listing created successfully!");
      window.location.href = "/index.html";
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Failed to create listing. Please try again.");
    }
  });
}
