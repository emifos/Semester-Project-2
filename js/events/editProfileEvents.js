import { updateProfile } from "../api/profiles.js";

export function setUpProfileEvents(name) {
    const form = document.getElementById("editProfileForm");
    const cancelButton = document.getElementById("cancelEdit");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            const banner = document.getElementById("profileBanner").value;
            const avatar = document.getElementById("profileAvatar").value;
            const bio = document.getElementById("profileBio").value;
        }
    })
}