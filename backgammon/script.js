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
    (currentSlide * 33) / visibleSlides
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



/* <div class="top-rating">
            <div class="button-container-second">
              <button class="table-header">text</button>
              <button class="table-header">text</button>
              <button class="table-header">text</button>
            </div>
            <table>
              <tr>
                <th>№</th>
                <th>Full Name</th>
                <th>Rating</th>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="numericia">1</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>  */