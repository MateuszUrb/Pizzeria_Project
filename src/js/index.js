import "../style/main.scss";

function showNav() {
  const nav = document.querySelector(".navbar_list_items");
  const hamburger = document.querySelector(".hamburger");
  const listItem = document.querySelectorAll(".list_item");
  const navHeader = document.querySelector("header");
  // toggle hamburger navbar
  
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    for (let i = 0; i < listItem.length; i++) {
      listItem[i].style.borderBottom = "2px solid #d2401e";
    }
    // hamburger animation
    hamburger.classList.toggle("toggle");
    navHeader.classList.toggle("navHeaderOpacity");
  });
};
showNav();

function hideNav() {
  const links = document.querySelectorAll(".list_item, li")
  const hamburger = document.querySelector(".hamburger");

  links.forEach(el => el.addEventListener("click", () => {
    el.parentElement.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
  }))
}

hideNav();

// get date for events 

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let dateObj = new Date();
let month = monthNames[dateObj.getMonth()];
let day = String(dateObj.getDate()).padStart(2, '0');
let year = dateObj.getFullYear();
let output = `Available: ${month} \n ${day}, ${year}`;

document.querySelectorAll('.events__date').forEach(el => el.textContent = output);