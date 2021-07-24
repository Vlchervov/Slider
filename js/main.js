"use strict";

let sliderContainer = document.querySelector(".slider-container"),
  sliderList = document.querySelector(".slider-container__list"),
  nextButton = document.getElementById("next"),
  backButton = document.getElementById("back");

let moveRight = () => {
  nextButton.style.display = 'none';
  let elem, clonedNode;
  sliderList.style.transition = "margin 1s linear";
  sliderList.style.marginLeft = `-200vw`;
  setTimeout(() => {
    sliderList.style.transition = "margin 0s linear";
    elem = sliderList.firstElementChild;
    clonedNode = elem.cloneNode(true);
    sliderList.append(clonedNode);
    sliderList.removeChild(elem);
    sliderList.style.marginLeft = `-100vw`;
    nextButton.style.display = 'block';
  }, 1200);
};

let moveLeft = () => {
  backButton.style.display = 'none';
  let elem, clonedNode;
  sliderList.style.transition = "margin 1s linear";
  sliderList.style.marginLeft = `0vw`;
  setTimeout(() => {
    sliderList.style.transition = "margin 0s linear";
    elem = sliderList.lastElementChild;
    clonedNode = elem.cloneNode(true);
    sliderList.prepend(clonedNode);
    sliderList.removeChild(elem);
    sliderList.style.marginLeft = `-100vw`;
    backButton.style.display = 'block';
  }, 1200);
};

nextButton.addEventListener("click", () => {
  moveRight();
});

backButton.addEventListener("click", () => {
  moveLeft();
});
