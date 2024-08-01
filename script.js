"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  // console.log(
  //   "height/width viewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////// Selecting, Creating, and Deleting Elements ///////////////////////////////////////
/*
// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
// .insertAdjacentHTML

const msg = document.createElement("div");
msg.classList.add("cookie-message");
// msg.textContent = "We use cookies for improved functionality and analytics.";
msg.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(msg);
header.append(msg);
// header.append(msg.cloneNode(true));

// header.before(msg);
// header.after(msg);

// delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    msg.remove();
  });
*/

/////////////////////////////////////// Styles, Attributes and Classes ///////////////////////////////////////
/*
// styles
msg.style.backgroundColor = "#37383d";
msg.style.width = "120%";

console.log(msg.style.height); //only works for inline
console.log(msg.style.backgroundColor);

console.log(getComputedStyle(msg));
console.log(getComputedStyle(msg).height);

msg.style.height =
  Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

// non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".github-link");
console.log(link.href);
console.log(link.getAttribute("href"));

const link1 = document.querySelector(".nav__link--btn");
console.log(link1.href);
console.log(link1.getAttribute("href"));

// data attributes
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add("c", "d");
logo.classList.remove("c", "d");
logo.classList.toggle("c");
logo.classList.contains("c");

// don't use bcoz overwrite
logo.className = "drishti";
*/

/////////////////////////////////////// Types of Events and Event Handlers ///////////////////////////////////////

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListner: Great! You are reading the heading. :)");

  h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000)

// h1.onmouseenter = function (e) {
//   alert("onmouseenter: Great! You are reading the heading. :)");
// };
