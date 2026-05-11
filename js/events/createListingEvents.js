import { showAlert } from "../utils/alert.js";
import { createListing } from "../api/listings.js";

// Add images to create listing form
export function setupAddImageEvent() {
  const addImageButton = document.getElementById("addImageButton");
  const imageContainer = document.getElementById("imageInputContainer");

  if (!addImageButton || !imageContainer) return;

  const maxImages = 8;

  addImageButton.addEventListener("click", () => {
    const currentInputs = imageContainer.querySelectorAll("input").length;

    if (currentInputs >= maxImages) {
      showAlert("You can only add 8 images", "error", 3000);
      return;
    }

    const imageContent = document.createElement("div");
    imageContent.className = "mt-3 flex flex-col gap-1";

    const imageLabel = document.createElement("label");
    imageLabel.textContent = "Image URL:";
    imageLabel.className = "text-text font-semibold md:text-lg";

    const imageInput = document.createElement("input");
    imageInput.type = "url";
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
  const cancelListing = document.getElementById("cancelListing");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const title = document.getElementById("listingTitle").value.trim();
      const description = document
        .getElementById("listingDescription")
        .value.trim();
      const imageInputs = document.querySelectorAll(
        "#imageInputContainer input",
      );
      const media = Array.from(imageInputs)
        .map((input) => input.value.trim())
        .filter((url) => url !== "")
        .map((url) => ({ url }));
      const tags = document.getElementById("tags").value.trim();
      const rawDate = document.getElementById("endDate").value;
      const endsAt = rawDate ? new Date(rawDate).toISOString() : null;

      const listingData = {
        title,
        description,
        media,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        endsAt,
      };

      await createListing(listingData);
      showAlert("Listing created successfully!", "success", 4000);
      setTimeout(() => {
        window.location.href = "./index.html";
      }, 1500);
    } catch (error) {
      console.error("Error creating listing:", error);
      showAlert(
        error.message || "Failed to create listing. Please try again.",
        error,
        4000,
      );
    }
  });

  cancelListing.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}
