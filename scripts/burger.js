const burgerIcon = document.querySelector(".burger__icon");
const burgerIconWrapper = document.querySelector(".burger__icon-wrapper");
const burger = document.querySelector(".burger");
const burgerWrapper = document.querySelector(".burger__wrapper");

burgerIconWrapper.addEventListener("click", function () {
  burgerIcon.classList.toggle("_active");
  burger.classList.toggle("_active");
  burgerWrapper.classList.toggle("_active");
});
