export function renderProfile(profile) {
  const user = profile.data;

  const container = document.createElement("div");
  container.className = "space-y-4";

  //Profile Header
  const profileHeader = document.createElement("div");

  //Banner with edit-button
  const bannerWrapper = document.createElement("div");
  bannerWrapper.className = "relative";

  const banner = document.createElement("img");
  banner.src = user.banner?.url || "/images/placeholder-img.jpg";
  banner.alt = user.banner?.alt || "Banner";
  banner.className = "w-full h-32 object-cover";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit profile";
  editButton.className =
    "absolute top-2 right-3 bg-text text-white px-3 py-2 rounded-md border border-white mt-2 cursor-pointer";
  editButton.id = "editButton";

  bannerWrapper.append(banner, editButton);

  //Profile Content
  const profileContent = document.createElement("div");
  profileContent.className = "p-4";

  const avatar = document.createElement("img");
  avatar.src = user.avatar?.url || "/images/placeholder-img.jpg";
  avatar.alt = user.avatar?.alt || "Avatar";
  avatar.className = "w-16 h-16 rounded-full md:w-20 md:h-20 object-cover";

  //Credit
  const credits = document.createElement("p");
  credits.className =
    "text-sm border border-border px-3 py-1 rounded-md shadow-md md:text-xl text-text";

  const creditIcon = document.createElement("span");
  creditIcon.className = "fa-solid fa-coins text-sm pr-1 md:text-xl text-text";

  const creditsText = document.createElement("span");
  creditsText.textContent = user.credits || "0";

  credits.append(creditIcon, creditsText);

  //name, email, bio
  const name = document.createElement("h1");
  name.textContent = user.name;
  name.className = "text-lg md:text-2xl font-semibold text-text";

  const email = document.createElement("p");
  email.textContent = user.email;
  email.className = "text-xs md:text-base text-text";

  const bio = document.createElement("p");
  bio.textContent = user.bio || "No bio.";
  bio.className = "text-sm md:text-lg mt-4 text-text";

  //Name row (name + credits)
  const nameRow = document.createElement("div");
  nameRow.className = "flex justify-between items-center w-full";

  nameRow.append(name, credits);

  // text column
  const textColumn = document.createElement("div");
  textColumn.className = "flex flex-col flex-1 mt-2";

  textColumn.append(nameRow, email, bio);

  //Left side (Avatar + Userinfo)
  const leftSide = document.createElement("div");
  leftSide.className = "flex items-start gap-3 w-full";

  leftSide.append(avatar, textColumn);

  //Top row
  const topRow = document.createElement("div");
  topRow.className = "mt-2";

  topRow.appendChild(leftSide);

  profileContent.appendChild(topRow);

  profileHeader.append(bannerWrapper, profileContent);

  //Profile Card
  const profileCard = document.createElement("div");
  profileCard.className = "bg-white shadow-md rounded-lg overflow-hidden";

  profileCard.append(profileHeader);

  // Tabs
  const tabsCard = document.createElement("div");
  tabsCard.className = "bg-white shadow-md rounded-md overflow-hidden";

  const tabs = document.createElement("div");
  tabs.className = "flex justify-center gap-12 md:gap-16 py-2";

  const listingsTab = document.createElement("button");
  listingsTab.textContent = "My Listings";
  listingsTab.className =
    "text-base md:text-lg font-medium md:font-semibold text-text cursor-pointer";
  listingsTab.id = "listingsTab";

  const bidsTab = document.createElement("button");
  bidsTab.textContent = "My Bids";
  bidsTab.className =
    "text-base md:text-lg font-medium md:font-semibold text-text cursor-pointer";
  bidsTab.id = "bidsTab";

  const winsTab = document.createElement("button");
  winsTab.textContent = "My Wins";
  winsTab.className =
    "text-base md:text-lg font-medium md:font-semibold text-text cursor-pointer";
  winsTab.id = "winsTab";

  tabs.append(listingsTab, bidsTab, winsTab);

  //Content Area
  const content = document.createElement("div");
  content.className = "p-4";
  content.id = "content";

  tabsCard.append(tabs, content);

  container.append(profileCard, tabsCard);

  return { container, content, listingsTab, bidsTab, winsTab, editButton };
}
