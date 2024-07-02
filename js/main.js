const menu = document.getElementById("nav_menu");
const list = document.getElementById("list");
const close = document.getElementById("nav_close");

menu.addEventListener("click", () => {
  list.classList.add("navbar_links_active");
  menu.classList.add("navbar_menu_none")
  close.classList.remove("navbar_menu_none")
});

close.addEventListener("click", () => {
  list.classList.remove("navbar_links_active");
  menu.classList.remove("navbar_menu_none")
  close.classList.add("navbar_menu_none")
});