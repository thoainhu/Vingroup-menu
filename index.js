let menuClick = document.querySelector(".menuClick");
let menuBar = document.querySelector(".menuBar");
let menuList = document.querySelector(".menuList");

menuClick.addEventListener("click", function () {
  menuClick.classList.toggle("active");
  menuBar.classList.toggle("active");
  menuList.classList.toggle("active");
});
