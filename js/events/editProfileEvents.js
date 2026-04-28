import { updateProfile } from "../api/profiles.js";

export function setUpEditProfileEvents(name) {
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

      window.location.href = "/profile.html;";
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  });

  cancelButton.addEventListener("click", () => {
    window.location.href = "/profile.html";
  });
}
