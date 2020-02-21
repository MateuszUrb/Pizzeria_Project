import "../style/main.scss";
import heroImg from '../assets/fire.jpg';

const showNav = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar_list_items");
  const listItem = document.querySelectorAll(".list_item");
  const navHeader = document.querySelector("header");
  // toggle hamburger navbar

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    for (let i = 0; i < listItem.length; i++) {
      listItem[i].style.width = "100%";
      listItem[0].style.borderTop = "1px solid black";
    }

    // hamburger animation
    hamburger.classList.toggle("toggle");
    navHeader.classList.toggle("navHeaderOpacity");
  });
};

showNav();

