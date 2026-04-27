import { getProfile } from "../api/profiles.js";

export async function renderEditProfile(name) {
  try {
    const response = await getProfile(name);
    const profile = response.data;

    document.getElementById("profileBanner").value = profile.banner?.url || "";
    document.getElementById("profileAvatar").value = profile.avatar?.url || "";
    document.getElementById("profileBio").value = profile.bio || "";
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}
