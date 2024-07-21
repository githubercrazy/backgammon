let currentSlide = 0;
const totalSlides = document.querySelectorAll(".news-item").length;
const visibleSlides = Math.floor(
  document.querySelector(".carousel-container").clientWidth /
    document.querySelector(".news-item").clientWidth
);
let isDown = false;
let startX;
let scrollLeft;

function moveCarousel(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > totalSlides - visibleSlides)
    currentSlide = totalSlides - visibleSlides;
  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${
    (currentSlide * 100) / visibleSlides
  }%)`;
}

const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");

carouselContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  carouselContainer.classList.add("active");
  startX = e.pageX - carouselContainer.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carouselContainer.addEventListener("mouseleave", () => {
  isDown = false;
  carouselContainer.classList.remove("active");
});

carouselContainer.addEventListener("mouseup", () => {
  isDown = false;
  carouselContainer.classList.remove("active");
});

carouselContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carouselContainer.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  carousel.scrollLeft = scrollLeft - walk;
});

carouselContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    moveCarousel(1);
  } else {
    moveCarousel(-1);
  }
});
