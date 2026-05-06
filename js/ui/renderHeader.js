export function renderHeader(isLoggedIn, profile, isProfilePage) {
  const user = profile?.data || profile || null;

  const header = document.createElement("div");
  header.className = "w-full bg-secondary";

  const nav = document.createElement("nav");
  nav.className = "flex justify-between items-center p-4 mx-auto relative z-50";

  //Logo on the left
  const logo = document.createElement("img");
  logo.src = "/images/logo-header.png";
  logo.alt = "Logo";
  logo.className = "h-16 md:h-20 object-contain justify-self-start";

  //Center nav ( Auction, Profile/Login)
  const centerNav = document.createElement("div");
  centerNav.className =
    "hidden flex-col items-center gap-6 absolute top-full left-0 w-full bg-secondary p-4 z-10 md:flex md:flex-row md:gap-16 md:static md:w-auto md:justify-self-center";

  //Auction always visible
  const auctionLink = document.createElement("a");
  auctionLink.href = "/index.html";
  auctionLink.textContent = "Auction";
  auctionLink.className =
    "text-white text-xl font-medium hover:underline hover:decoration-accent";

  centerNav.appendChild(auctionLink);

  if (isLoggedIn) {
    const profileLink = document.createElement("a");
    profileLink.href = "/profile.html";
    profileLink.textContent = "Profile";
    profileLink.className =
      "text-white text-xl font-medium hover:underline hover:decoration-accent";

    centerNav.appendChild(profileLink);
  } else {
    const loginLink = document.createElement("a");
    loginLink.href = "/login.html";
    loginLink.textContent = "Login";
    loginLink.className =
      "text-white text-xl font-medium hover:underline hover:decoration-accent";

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
        "flex items-center gap-2 text-white font-medium text-lg";

      const icon = document.createElement("span");
      icon.className = "fa-solid fa-coins text-white";

      const amount = document.createElement("span");
      amount.textContent = user?.credits;

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
    "hidden absolute flex flex-col gap-6 absolute top-20 left-0 w-full h-screen bg-secondary p-4 md:hidden z-40";

  //Credits/Logout top right
  if (isLoggedIn) {
    if (isProfilePage) {
      const mobileLogout = document.createElement("button");
      mobileLogout.textContent = "Log out";
      mobileLogout.id = "mobileLogoutButton";
      mobileLogout.className =
        "absolute top-4 right-4 bg-text text-white border border-white rounded-md px-3 py-2";

      mobileMenu.appendChild(mobileLogout);
    } else {
      const mobileCredits = document.createElement("div");
      mobileCredits.className =
        "absolute top-4 right-4 flex items-center gap-2 text-white font-medium text-lg";

      const mobileIcon = document.createElement("span");
      mobileIcon.className = "fa-solid fa-coins text-white";

      const mobileAmount = document.createElement("span");
      mobileAmount.textContent = user?.credits;

      mobileCredits.append(mobileIcon, mobileAmount);
      mobileMenu.appendChild(mobileCredits);
    }
  }

  //Links wrapper
  const mobileLinks = document.createElement("div");
  mobileLinks.className = "flex flex-col gap-6 mt-12";

  //Auction
  const mobileAuction = document.createElement("a");
  mobileAuction.href = "/index.html";
  mobileAuction.textContent = "Auction";
  mobileAuction.className = "text-white text-xl";

  mobileLinks.appendChild(mobileAuction);

  //Profile/Login button
  if (isLoggedIn) {
    const mobileProfile = document.createElement("a");
    mobileProfile.href = "/profile.html";
    mobileProfile.textContent = "Profile";
    mobileProfile.className = "text-white text-xl";

    mobileLinks.appendChild(mobileProfile);
  } else {
    const mobileLogin = document.createElement("a");
    mobileLogin.href = "/login.html";
    mobileLogin.textContent = "Login";
    mobileLogin.className = "text-white text-xl";

    mobileLinks.appendChild(mobileLogin);
  }

  mobileMenu.appendChild(mobileLinks);
  rightWrapper.append(rightSide, menuButton);
  nav.append(logo, centerNav, rightWrapper);
  header.append(nav, mobileMenu);

  return header;
}
