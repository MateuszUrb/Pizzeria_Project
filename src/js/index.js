
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import "../style/main.scss";


// loading spinner before 100% of webpage content is loaded
// document.onreadystatechange = function () {
//   const body = document.querySelector("body");
//   const loader = document.querySelector("#loader");
//   if (document.readyState !== "complete") {
//     body.style.visibility = "hidden";
//     loader.style.visibility = "visible";
//   } else {
//     loader.style.display = "none";
//     body.style.visibility = "visible";
//   }
// }

const navBtn = document.querySelector(".nav__mobile-btn")
const nav = document.querySelector(".mobile__nav");

function showNav() {
  navBtn.addEventListener("click", (e) => {
    nav.classList.toggle("active");
    navBtn.classList.toggle("active")
  })
}

showNav()