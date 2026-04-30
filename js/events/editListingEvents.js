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
      const imageUrl = document.getElementById("listingImage").value.trim();
      const tags = document.getElementById("tags").value.trim();

      const updatedData = {
        title,
        description,
        media: imageUrl ? [{ url: imageUrl }] : [],
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      };

      await updateListing(id, updatedData);
      alert("Listing updated successfully!");
      window.location.href = `/single-listing.html?id=${id}`;
    } catch (error) {
      console.error("Error updating listing:", error);
      alert("Failed to update listing. Please try again.");
    }
  });

  cancelButton.addEventListener("click", () => {
    window.location.href = `/single-listing.html?id=${id}`;
  });
}
