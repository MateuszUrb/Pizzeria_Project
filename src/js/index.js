import "../style/main.scss";

const toggleNavBar = () => {
  const links = document.querySelector(".navbar_list");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
};
 toggleNavBar();