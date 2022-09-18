const navBtn = document.querySelector(".nav-button");

const mobileNav = document.querySelector(".mobile-nav");

const body = document.body;

// Клик по кнопке
navBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleMobileNav();
});

// Клик за перделами навигационного меню
window.addEventListener("click", function () {
  if (body.classList.contains("no-scroll")) {
    toggleMobileNav();
  }
});

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener("click", function (event) {
  event.stopPropagation();
});
function toggleMobileNav() {
  mobileNav.classList.toggle("mobile-nav-activ");
  navBtn.classList.toggle("nav-button-close");
  body.classList.toggle("no-scroll");
}
