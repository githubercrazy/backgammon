let currentSlide = 0;
const totalSlides = document.querySelectorAll(".news-item").length;
const itemWidth = document.querySelector(".news-item").clientWidth;
const containerWidth = document.querySelector(
  ".carousel-container"
).clientWidth;
const visibleSlides = Math.floor(containerWidth / itemWidth);
const scrollAmount = itemWidth * 0.5; // Adjust this value to slow down scrolling

function moveCarousel(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > totalSlides - visibleSlides)
    currentSlide = totalSlides - visibleSlides;

  // Calculate the offset for scrolling
  const offset = -currentSlide * itemWidth;

  // Smooth scrolling using CSS transitions
  const carousel = document.querySelector(".carousel");
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(${offset}px)`;
}

// Adjust button event listeners for slower scrolling
document
  .querySelector(".prev")
  .addEventListener("click", () => moveCarousel(-1));
document
  .querySelector(".next")
  .addEventListener("click", () => moveCarousel(1));

// Handling mouse drag and scroll
let isDown = false;
let startX;
let scrollLeft;

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
  const walk = (x - startX) * 3; // scroll-fast
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
