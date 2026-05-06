import { showAlert } from "../utils/alert.js";
import { updateListing } from "../api/listings.js";

export function setUpEditListingEvents(id) {
  const form = document.getElementById("editListingForm");
  const cancelButton = document.getElementById("cancelEdit");

  if (!form) return;

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

      const updatedData = {
        title,
        description,
        media,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      };

      await updateListing(id, updatedData);
      showAlert("Listing updated successfully!", "success", 3000);
      setTimeout(() => {
        window.location.href = `/single-listing.html?id=${id}`;
      }, 1500);
    } catch (error) {
      console.error("Error updating listing:", error);
      showAlert(
        error.message || "Failed to update listing. Please try again.",
        error,
        4000,
      );
    }
  });

  cancelButton.addEventListener("click", () => {
    window.location.href = `/single-listing.html?id=${id}`;
  });
}
