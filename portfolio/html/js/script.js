
lucide.createIcons();


// Opening Mobile menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// animation


window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 900);
});