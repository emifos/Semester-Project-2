export function renderProfile(profile) {
  const user = profile.data;

  const container = document.createElement("div");
  container.className = "";

  //Profile Header
  const profileHeader = document.createElement("div");
  profileHeader.className = "";

  const name = document.createElement("h2");
  name.textContent = user.name;
  name.className = "";

  const email = document.createElement("p");
  email.textContent = user.email;
  email.className = "";

  const bio = document.createElement("p");
  bio.textContent = user.bio || "No bio.";
  bio.className = "";

  const avatar = document.createElement("img");
  avatar.src = user.avatar?.url || "/images/placeholder-img.jpg";
  avatar.alt = user.avatar?.alt || "Avatar";
  avatar.className = "";

  //Banner with edit-button
  const bannerWrapper = document.createElement("div");
  bannerWrapper.className = "";

  const banner = document.createElement("img");
  banner.src = user.banner?.url || "/images/placeholder-img.jpg";
  banner.alt = user.banner?.alt || "Banner";
  banner.className = "";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit profile";
  editButton.className = "";

  bannerWrapper.append(banner, editButton);

  const credits = document.createElement("p");
  credits.textContent = `Credits: ${user.credits}`;
  credits.className = "";

  profileHeader.append(bannerWrapper, credits, avatar, name, email, bio);

  // Tabs
  const tabs = document.createElement("div");
  tabs.className = "";

  const listingsTab = document.createElement("button");
  listingsTab.textContent = "Listings";
  listingsTab.className = "";

  const bidsTab = document.createElement("button");
  bidsTab.textContent = "Bids";
  bidsTab.className = "";

  const winsTab = document.createElement("button");
  winsTab.textContent = "Wins";
  winsTab.className = "";

  tabs.append(listingsTab, bidsTab, winsTab);

  //Content Area
  const content = document.createElement("div");
  content.className = "";

  container.append(profileHeader, tabs, content);

  return { container, content, listingsTab, bidsTab, winsTab, editButton };
}
