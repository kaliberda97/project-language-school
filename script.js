// const slider = document.querySelector(".slider");
// const prevButton = document.querySelector(".prev-btn");
// const nextButton = document.querySelector(".next-btn");
// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// function showSlide(slideIndex) {
//   slides.forEach((slide, index) => {
//     if (index === slideIndex) {
//       slide.style.display = "block";
//     } else {
//       slide.style.display = "none";
//     }
//   });
// }

// function showNextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function showPreviousSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// nextButton.addEventListener("click", showNextSlide);
// prevButton.addEventListener("click", showPreviousSlide);

// // Показать первый слайд при загрузке страницы
// showSlide(currentSlide);


const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const slideWidth = 33.33; // 33.33% width for each slide
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index >= slideIndex && index < slideIndex + 5) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function showNextSlide() {
  currentSlide = (currentSlide + 1) % (slides.length - 2);
  showSlide(currentSlide);
}

function showPreviousSlide() {
  currentSlide = (currentSlide - 1 + (slides.length - 2)) % (slides.length - 2);
  showSlide(currentSlide);
}

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPreviousSlide);

// Show the first three slides upon page load
showSlide(currentSlide);

