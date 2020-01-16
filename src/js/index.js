import "../style/main.scss";

const showNav = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar_list_items");
  // toggle hamburger navbar
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // hamburger animation
    hamburger.classList.toggle("toggle");
  });


};

showNav();
