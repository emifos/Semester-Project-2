import { get, put } from "./apiClient.js";

//Get single profile
export async function getProfile(name) {
  return await get(`/auction/profiles/${name}`);
}

//Update profile
export async function updateProfile(name, profileData) {
  return await put(`/auction/profiles/${name}`, profileData);
}

//Get profile listings
export async function getProfileListings(name) {
  return await get(`/auction/profiles/${name}/listings`);
}

//Get profile bids
export async function getProfileBids(name) {
  return await get(`/auction/profiles/${name}/bids?_listings`);
}

//Get profile wins
export async function getProfileWins(name) {
  return await get(`/auction/profiles/${name}/wins`);
}
