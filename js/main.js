//Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
});

//Show-hidden bib text
const divContainer1 = document.querySelector("#Show_Bib_code1");
let isClicked1 = true;
let showOrHide1 = function () {
  if (isClicked1) {
    divContainer1.style.display = "block";
    isClicked1 = false;
  } else {
    divContainer1.style.display = "none";
    isClicked1 = true;
  }
};
//Show-hidden bib text
const divContainer2 = document.querySelector("#Show_Bib_code2");
let isClicked2 = true;
let showOrHide2 = function () {
  if (isClicked2) {
    divContainer2.style.display = "block";
    isClicked2 = false;
  } else {
    divContainer2.style.display = "none";
    isClicked2 = true;
  }
};
