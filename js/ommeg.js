const burgerMenu = document.querySelector(".burgermenu");

const dropdownMenu = document.querySelector(".dropdown-menu");

burgerMenu.addEventListener("click", function () {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

window.addEventListener("load", hideScreens2);

function hideScreens2() {
  console.log("hideScreens2");
  document.querySelector("#design").classList.add("hide");
  document.querySelector("#kundeservice").classList.add("hide");
  document.querySelector("#okonomi").classList.add("hide");
  document.querySelector("#okad").classList.add("hide");
  document.querySelector("#kursus").classList.add("hide");
  document.querySelector("#multimedie").classList.add("hide");
  document
    .querySelector("#knapp_design")
    .addEventListener("mousedown", showDesign);
  document
    .querySelector("#knapp_kundeservice")
    .addEventListener("mousedown", showKundeservice);
  document
    .querySelector("#knapp_okonomi")
    .addEventListener("mousedown", showOkonomi);

  document.querySelector("#knapp_okad").addEventListener("mousedown", showOkad);
  document
    .querySelector("#knapp_kursus")
    .addEventListener("mousedown", showKursus);
  document
    .querySelector("#knapp_multimedie")
    .addEventListener("mousedown", showMultimedie);
}

function showDesign() {
  console.log("showDesign");
  document.querySelector("#design").classList.remove("hide");
  document.querySelector("#design").classList.add("fall");
  document
    .querySelector("#tilbake1")
    .addEventListener("mousedown", hideScreens2);
}

function showKundeservice() {
  console.log("showKundeservice");
  document.querySelector("#kundeservice").classList.remove("hide");
  document.querySelector("#kundeservice").classList.add("fall");
  document
    .querySelector("#tilbake2")
    .addEventListener("mousedown", hideScreens2);
}

function showOkonomi() {
  console.log("showOkonomi");
  document.querySelector("#okonomi").classList.remove("hide");
  document.querySelector("#okonomi").classList.add("fall");
  document
    .querySelector("#tilbake3")
    .addEventListener("mousedown", hideScreens2);
}

function showOkad() {
  console.log("showOkad");
  document.querySelector("#okad").classList.remove("hide");
  document.querySelector("#okad").classList.add("fall");
  document
    .querySelector("#tilbake5")
    .addEventListener("mousedown", hideScreens2);
}

function showKursus() {
  console.log("showKursus");
  document.querySelector("#kursus").classList.remove("hide");
  document.querySelector("#kursus").classList.add("fall");
  document
    .querySelector("#tilbake6")
    .addEventListener("mousedown", hideScreens2);
}

function showMultimedie() {
  console.log("showMultimedie");
  document.querySelector("#multimedie").classList.remove("hide");
  document.querySelector("#multimedie").classList.add("fall");
  document
    .querySelector("#tilbake7")
    .addEventListener("mousedown", hideScreens2);
}
