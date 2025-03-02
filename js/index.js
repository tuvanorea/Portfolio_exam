const burgerMenu = document.querySelector(".burgermenu");

const dropdownMenu = document.querySelector(".dropdown-menu");

burgerMenu.addEventListener("click", function () {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});
