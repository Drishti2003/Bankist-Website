"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
// Modal window

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

///////////////////////////////////////
// button scrolling

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

///////////////////////////////////////
// page navigation

// document.querySelectorAll(".nav__link").forEach(function (e) {
//   e.addEventListener("click", function (el) {
//     el.preventDefault();

//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// tabbed component

// tabs.forEach((t) => t.addEventListener("click", () => console.log("TAB")));

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  // guard clause
  if (!clicked) return;

  // remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((t) => t.classList.remove("operations__content--active"));

  // Active Tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// passing arg into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky Navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// Sticky navigation : Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOption = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

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
/*
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
*/

/////////////////////////////////////// Event Propagation in Practice ///////////////////////////////////////
/*
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;
// console.log(randomColor(0, 255));

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // e.stopPropagation();
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});
*/

/////////////////////////////////////// DOM Traversing ///////////////////////////////////////
/*
const h1 = document.querySelector("h1");

// going downwards : child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

h1.closest("h1").style.background = "var(--gradient-primary)";

// going sideways : siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (e) {
  if (e !== h1) e.style.transform = "scale(0.5";
});
*/

/////////////////////////////////////// Sticky Navigation ///////////////////////////////////////
