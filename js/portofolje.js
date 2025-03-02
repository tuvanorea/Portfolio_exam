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
  document.querySelector("#tema1").classList.add("hide");
  document.querySelector("#tema2").classList.add("hide");
  document.querySelector("#tema3").classList.add("hide");
  document.querySelector("#tema4").classList.add("hide");
  document.querySelector("#tema5").classList.add("hide");
  document.querySelector("#tema6").classList.add("hide");
  document
    .querySelector("#knapp_tema1")
    .addEventListener("mousedown", showTema1);
  document
    .querySelector("#knapp_tema2")
    .addEventListener("mousedown", showTema2);
  document
    .querySelector("#knapp_tema3")
    .addEventListener("mousedown", showTema3);
  document
    .querySelector("#knapp_tema4")
    .addEventListener("mousedown", showTema4);
  document
    .querySelector("#knapp_tema5")
    .addEventListener("mousedown", showTema5);
  document
    .querySelector("#knapp_tema6")
    .addEventListener("mousedown", showTema5);
}

function showTema1() {
  console.log("showTema1");
  document.querySelector("#tema1").classList.remove("hide");
  document.querySelector("#tema1").classList.add("fall");
  document
    .querySelector("#tilbake1")
    .addEventListener("mousedown", hideScreens2);
}

function showTema2() {
  console.log("showTema2");
  document.querySelector("#tema2").classList.remove("hide");
  document.querySelector("#tema2").classList.add("fall");
  document
    .querySelector("#tilbake2")
    .addEventListener("mousedown", hideScreens2);
}

function showTema3() {
  console.log("showTema3");
  document.querySelector("#tema3").classList.remove("hide");
  document.querySelector("#tema3").classList.add("fall");
  document
    .querySelector("#tilbake3")
    .addEventListener("mousedown", hideScreens2);
}

function showTema4() {
  console.log("showTema4");
  document.querySelector("#tema4").classList.remove("hide");
  document.querySelector("#tema4").classList.add("fall");
  document
    .querySelector("#tilbake4")
    .addEventListener("mousedown", hideScreens2);
}

function showTema5() {
  console.log("showTema5");
  document.querySelector("#tema5").classList.remove("hide");
  document.querySelector("#tema5").classList.add("fall");
  document
    .querySelector("#tilbake5")
    .addEventListener("mousedown", hideScreens2);
}

function showTema6() {
  console.log("showTema6");
  document.querySelector("#tema6").classList.remove("hide");
  document.querySelector("#tema6").classList.add("fall");
  document
    .querySelector("#tilbake6")
    .addEventListener("mousedown", hideScreens2);
}
