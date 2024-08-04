let currentIndex = 0;

function moveCarousel(step) {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  currentIndex = (currentIndex + step + totalItems) % totalItems;
  const offset = -currentIndex * (items[0].offsetWidth + 10);

  carousel.style.transform = `translateX(${offset}px)`;
}
