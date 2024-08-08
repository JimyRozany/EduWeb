"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElem);

// ************ show & hide login card ************
const loginBtn = document.getElementById("login-btn");
const loginArea = document.getElementById("login-area");

const wrapper = document.querySelector(".wrapper-login");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconClose = document.querySelector(".icon-close");
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
  // wrapper.classList.add('active-popup');
  loginArea.style.transform = "scale(1)";
  wrapper.style.transform = "scale(1)";
});
iconClose.addEventListener("click", () => {
  // wrapper.classList.remove('active-popup');
  wrapper.style.transform = "scale(0)";

  setTimeout(() => {
    loginArea.style.transform = "scale(0)";
  }, 1000);
});

// ************ end show & hide login card ************

// ************ show & hide payment card ************

const paymentArea = document.getElementById("payment-area");
const closePaymentBtn = document.getElementById("payment-close-btn");

let showPaymentCard = (e) => {
  // console.log(e.children[2].children[1].children[0].innerHTML);
  let price = e.children[2].children[3].value;
  let title = e.children[2].children[1].children[0].innerHTML;

  const cardTitle = document.querySelector(".payment-card-title");
  const cardPrice = document.querySelector(".payment-card-price");

  cardTitle.innerHTML = title;
  cardPrice.innerHTML = "$" + price;

  paymentArea.style.transform = "scale(1)";
};

closePaymentBtn.addEventListener("click", () => {
  paymentArea.style.transform = "scale(0)";
});

// ************ end show & hide payment card ************

// ************ language section ************

const showMoreCoursesSection = () => {
  const langSection = document.getElementById("lang-course");
  const moreCoursesArrow = document.getElementById("more-courses-arrow");
  const moreCoursesBtn = document.getElementById("more-courses-btn");
console.log(moreCoursesBtn.children);
  if (langSection.classList.contains("show-lang-course")) {
    langSection.classList.remove("show-lang-course");
    moreCoursesArrow.style.rotate = "0deg";
    moreCoursesBtn.children[0].innerHTML = "Browse more courses";
  } else {
    langSection.classList.add("show-lang-course");
    
    moreCoursesArrow.style.rotate = "-90deg";
    moreCoursesBtn.children[0].innerHTML = "Browse less courses" ;

  }
};

// ************ end language section ************
