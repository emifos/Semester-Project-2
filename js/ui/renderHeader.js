export function renderHeader(isLoggedIn, user, isProfilePage) {
  const header = document.createElement("div");
  header.className = "w-full bg-secondary";

  const nav = document.createElement("nav");
  nav.className = "flex justify-between items-center p-4 mx-auto relative z-50";

  //Logo on the left
  const logo = document.createElement("img");
  logo.src = "/images/logo-header.png";
  logo.alt = "Logo";
  logo.className = "h-12 md:h-20 object-contain justify-self-start";

  //Center nav ( Auction, Profile/Login)
  const centerNav = document.createElement("div");
  centerNav.className =
    "hidden flex-col items-center gap-6 absolute top-full left-0 w-full bg-secondary p-4 z-10 md:flex md:flex-row md:gap-16 md:static md:w-auto md:justify-self-center";

  //Auction always visible
  const auctionLink = document.createElement("a");
  auctionLink.href = "/index.html";
  auctionLink.textContent = "Auction";
  auctionLink.className =
    "text-white text-header-mobile font-medium hover:underline hover:decoration-accent";

  centerNav.appendChild(auctionLink);

  if (isLoggedIn) {
    const profileLink = document.createElement("a");
    profileLink.href = "/profile.html";
    profileLink.textContent = "Profile";
    profileLink.className =
      "text-white text-header-mobile font-medium hover:underline hover:decoration-accent";

    centerNav.appendChild(profileLink);
  } else {
    const loginLink = document.createElement("a");
    loginLink.href = "/login.html";
    loginLink.textContent = "Login";
    loginLink.className =
      "text-white text-header-mobile font-medium hover:underline hover:decoration-accent";

    centerNav.appendChild(loginLink);
  }

  //Right side (credits/logout)

  const rightWrapper = document.createElement("div");
  rightWrapper.className = "flex items-center gap-4";

  const rightSide = document.createElement("div");
  rightSide.className =
    "hidden items-center gap-4 justify-self-end mr-4 md:flex";

  if (isLoggedIn) {
    if (isProfilePage) {
      const logoutButton = document.createElement("button");
      logoutButton.textContent = "Log out";
      logoutButton.id = "logoutButton";
      logoutButton.className =
        "bg-text text-white border border-white rounded-md px-3 py-2 cursor-pointer";

      rightSide.appendChild(logoutButton);
    } else {
      const credits = document.createElement("div");
      credits.className =
        "flex items-center gap-1 text-white font-medium text-lg";

      const icon = document.createElement("span");
      icon.className = "fa-solid fa-coins text-white";

      const amount = document.createElement("span");
      amount.textContent = user?.credits ?? "0";

      credits.append(icon, amount);
      rightSide.appendChild(credits);
    }
  }

  //Menu mobile
  const menuButton = document.createElement("button");
  menuButton.id = "menuButton";
  menuButton.className = "text-white text-2xl md:hidden justify-self-end z-50";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-bars";
  menuButton.appendChild(icon);

  //Mobile menu dropdown
  const mobileMenu = document.createElement("div");
  mobileMenu.id = "mobileMenu";
  mobileMenu.className =
    "hidden flex flex-col items-center gap-6 absolute top-16 left-0 w-full bg-secondary p-4 md:hidden z-40";

  const mobileAuction = document.createElement("a");
  mobileAuction.href = "/index.html";
  mobileAuction.textContent = "Auction";
  mobileAuction.className = "text-white";

  mobileMenu.appendChild(mobileAuction);

  if (isLoggedIn) {
    const mobileProfile = document.createElement("a");
    mobileProfile.href = "/profile.html";
    mobileProfile.textContent = "Profile";
    mobileProfile.className = "text-white";

    mobileMenu.appendChild(mobileProfile);
  } else {
    const mobileLogin = document.createElement("a");
    mobileLogin.href = "/login.html";
    mobileLogin.textContent = "Login";
    mobileLogin.className = "text-white";

    mobileMenu.appendChild(mobileLogin);
  }

  rightWrapper.append(rightSide, menuButton);
  nav.append(logo, centerNav, rightWrapper);
  header.append(nav, mobileMenu);

  return header;
}
