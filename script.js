"use strict";

const clickArea = document.getElementsByClassName(`dropdown-text-arrow`);
const text = document.querySelectorAll(`.dropdown-invisible-text`);
const dropdownInvisible = document.querySelectorAll(`.dropdown-invisible`);
const arrow = document.querySelectorAll(`.dropdown-arrow`);
const dropDown = document.querySelectorAll(`.dropdown-invisible-text`);
const visibleText = document.querySelectorAll(`.dropdown-visible-text`);

const closeDropDown = function (i) {
  dropdownInvisible[i].classList.remove(`dropdown-invisible-open`);
  dropdownInvisible[i].classList.add(`dropdown-invisible`);
  arrow[i].classList.add(`arrow-down`);
  arrow[i].classList.remove(`arrow-opened`);
};

const openDropDown = function (i) {
  text[i].classList.add(`visible-text`);
  text[i].classList.remove(`hidden-text`);
  arrow[i].classList.add(`arrow-opened`);
  arrow[i].classList.remove(`arrow-down`);
  dropdownInvisible[i].classList.add(`dropdown-invisible-open`);
  dropdownInvisible[i].classList.remove(`dropdown-invisible`);
};
for (let i = 0; i < clickArea.length; i++) {
  clickArea[i].addEventListener(`click`, function () {
    if (dropdownInvisible[i].classList.contains("dropdown-invisible")) {
      openDropDown(i);
    } else {
      closeDropDown(i);
    }
  });
}

// Sticky Scroll

window.onscroll = () => {
  const nav = document.querySelector(".header-menu-wrapper");
  const menu = document.querySelector(".header-menu");
  if (this.scrollY > 60) {
    nav.classList.add("header-menu-wrapper-sticky");
    menu.classList.add("header-menu-sticky");
  } else {
    menu.classList.remove("header-menu-sticky");
    nav.classList.remove("header-menu-wrapper-sticky");
  }
};

// Preloader
const preloader = document.querySelector(`.preloader-dots`);
const contentWrapper = document.querySelector(`.page-content-wrapper`);

window.onload = function () {
  //hide the preloader
  preloader.style.display = "none";
  contentWrapper.style.display = "block";
};

// Mobile Menu

const burgerButton = document.querySelector(`.burger-menu`);
const crossButton = document.querySelector(`.menu-close-cross`);
const body = document.querySelector(`.body`);
const mobileMenu = document.querySelector(`.mobile-menu`);

const openMobileMenu = function () {
  mobileMenu.style.transform = "translateX(0px)";
  body.classList.add("body-noscroll");
  contentWrapper.style.opacity = "0.7";
};

const closeMobileMenu = function () {
  mobileMenu.style.transform = "translateX(320px)";
  body.classList.remove("body-noscroll");
  contentWrapper.style.opacity = "1";
};

burgerButton.addEventListener("click", openMobileMenu);
crossButton.addEventListener("click", closeMobileMenu);
