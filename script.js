// SMOOTH SCROLLING

// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".container"),
//   smooth: true,
// });

function page4animation() {
  var elemC = document.querySelector(".elem-container");
  var fixed = document.querySelector(".fixed-image");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elem = document.querySelectorAll(".elem");

  elem.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `Url(${image})`;
    });
  });
}

// SWIPER

function swiperanimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 90,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

swiperanimation();
page4animation();

var menu = document.querySelector("nav h3");
var full = document.querySelector(".full-scr");
var flag = 0;

menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    flag = 1;
  } else {
    full.style.top = "-100%";
  }
});
