
let currentIndex = 0;
const carouselInner = document.querySelector(".carousel-inner");
const newsItems = document.querySelectorAll(".news-item");

function moveCarousel(direction) {
  const totalItems = newsItems.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * (newsItems[0].offsetWidth + 10);
  carouselInner.style.transform = `translateX(${offset}px)`;
}

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    moveCarousel(1);
  } else {
    moveCarousel(-1);
  }
});
