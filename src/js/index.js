import "../style/main.scss";

const showNav = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar_list_items");
  const listItem = document.querySelectorAll(".list_item");
  // toggle hamburger navbar
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    for (let i = 0; i < listItem.length; i++) {
      listItem[i].style.width = "100%";
    }
    // hamburger animation
    hamburger.classList.toggle("toggle");
  });
};

showNav();

// navbar background change after scroll
