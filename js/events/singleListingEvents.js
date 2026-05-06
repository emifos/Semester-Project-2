import { deleteListing } from "../api/listings.js";
import { showAlert } from "../utils/alert.js";

// Image carousel on single listing page
export function changeMainImage() {
  document.addEventListener("click", (e) => {
    const button = e.target.closest("[data-action]");
    if (!button) return;

    const container = button.closest("[data-carousel]");
    const image = container.querySelector('[data-role="main-image"]');

    const media = JSON.parse(container.dataset.media);
    let index = Number(image.dataset.index);

    if (button.dataset.action === "next") {
      index++;
    } else if (button.dataset.action === "prev") {
      index--;
    }

    if (index >= media.length) index = 0;
    if (index < 0) index = media.length - 1;

    const imageUrl = media[index]?.url;

    image.src =
      imageUrl && imageUrl.trim() !== ""
        ? imageUrl
        : "/images/placeholder-img.jpg";

    image.dataset.index = index;
  });
}

// Modal for deleting listing
export function initDeleteModal() {
  const deleteButton = document.querySelector("[data-delete]");
  const modal = document.getElementById("confirmModal");
  const confirmDeleteButton = document.getElementById("deleteButton");
  const cancelButton = document.getElementById("cancelButton");

  if (!deleteButton || !modal || !confirmDeleteButton || !cancelButton) return;

  // Open modal
  deleteButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });

  // Cancel and close the modal
  cancelButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  // Delete listing
  confirmDeleteButton.addEventListener("click", async () => {
    const params = new URLSearchParams(window.location.search);
    const listingId = params.get("id");

    if (!listingId) return;

    try {
      await deleteListing(listingId);
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      showAlert("Listing deleted successfully!", "success", 3000);
      setTimeout(() => {
        window.location.href = "/index.html";
      }, 2000);
    } catch (error) {
      showAlert(error.message || "Failed to delete listing", "error", 3000);
    }
  });
}
