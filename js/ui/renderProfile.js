export function renderProfile(profile) {
  const user = profile.data;

  const container = document.createElement("div");

  //Profile Header
  const profileHeader = document.createElement("div");

  const name = document.createElement("h2");
  name.textContent = user.name;

  const email = document.createElement("p");
  name.textContent = user.email;

  const bio = document.createElement("p");
  name.textContent = user.bio || "No bio.";

  const avatar = document.createElement("img");
  avatar.src = user.avatar?.url || "";
  avatar.alt = user.avatar?.alt || "Avatar";

  const banner = document.createElement("img");
  banner.src = user.banner?.url || "";
  banner.alt = user.banner?.alt || "Banner";

  const credits = document.createElement("p");
  credits.textContent = `Credits: ${user.credits}`;

  profileHeader.append(banner, credits, avatar, name, email, bio);

  // Tabs
  const tabs = document.createElement("div");

  const listingsTab = document.createElement("button");
  listingsTab.textContent = "Listings";

  const bidsTab = document.createElement("button");
  bidsTab.textContent = "Bids;";

  const winsTab = document.createElement("button");
  winsTab.textContent = "Wins";

  tabs.append(listingsTab, bidsTab, winsTab);

  //Content Area
  const content = document.createElement("div");

  container.append(profileHeader, tabs, content);

  return (container, content, listingsTab, bidsTab, winsTab);
}
