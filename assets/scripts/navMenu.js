const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navMobile = document.getElementById("nav-mobile");

openMenu.addEventListener("click", () => {
  navMobile.showModal();
  openMenu.setAttribute("aria-expanded", true);
});

closeMenu.addEventListener("click", () => {
  navMobile.close();
  openMenu.setAttribute("aria-expanded", false);
});

navMobile.addEventListener("click", (event) => {
  if (event.target === navMobile) {
    navMobile.close();
    openMenu.setAttribute("aria-expanded", false);
  }
});
