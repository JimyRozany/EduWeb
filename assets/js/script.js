'use strict';



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
}



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
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

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
}

addEventOnElem(window, "scroll", activeElem);


// ************ test ************

// ************ show & hide login card ************
const loginBtn = document.getElementById("login-btn")




const wrapper = document.querySelector('.wrapper-login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
});

loginBtn.addEventListener('click',() => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',() => {
    wrapper.classList.remove('active-popup');
});

// ************ end show & hide login card ************


// ************ show & hide payment card ************
// const course_1 = document.getElementById("course-1");
// const course_2 = document.getElementById("course-2");
// const course_3 = document.getElementById("course-3");
// const paymentCardCloseBtn = document.getElementById("payment-close-btn");
// const paymentArea = document.getElementsByClassName("payment-area");
// const paymentContainer = document.getElementsByClassName("payment-container");

// let corBtn = document.getElementById("cor-btn");

// corBtn.addEventListener("click" ,function(){
// alert("cor Btn ................")
// paymentArea.style.transform = "scale(1)";
// paymentContainer.style.transform = "scale(1)";
// });


// course_1.addEventListener('click' ,function(){
//   paymentContainer.classList.add('active-popup') ;
// })

// course_2.addEventListener('click' ,function(){
//   paymentContainer.classList.add('active-popup') ;
// })

// course_3.addEventListener('click' ,function(){
//   paymentContainer.classList.add('active-popup') ;
// })

// paymentCardCloseBtn.addEventListener('click' ,function(){
//   paymentContainer.classList.remove('active-popup') ;
// })

// ************ end show & hide payment card ************







// ************ test ************