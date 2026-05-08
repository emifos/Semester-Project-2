import { showAlert } from "../utils/alert.js";
import { updateProfile } from "../api/profiles.js";

export function setupEditProfileEvents(name) {
  const form = document.getElementById("editProfileForm");
  const cancelButton = document.getElementById("cancelEdit");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const banner = document.getElementById("profileBanner").value;
      const avatar = document.getElementById("profileAvatar").value;
      const bio = document.getElementById("profileBio").value;

      await updateProfile(name, {
        banner: { url: banner },
        avatar: { url: avatar },
        bio,
      });

      showAlert("Profile updated successfully!", "success", 3000);
      setTimeout(() => {
        window.location.href = "./profile.html";
      }, 1500);
    } catch (error) {
      console.error("Error updating profile:", error);
      showAlert(
        error.message || "Failed to update profile. Please try again.",
        "error",
        4000,
      );
    }
  });

  cancelButton.addEventListener("click", () => {
    window.location.href = "./profile.html";
  });
}
