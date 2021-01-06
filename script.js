let slideIndex = 1;
showSlides(slideIndex);

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  var slideButtons = document.getElementsByClassName("slide-button");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slideButtons.length; i++) {
    slideButtons[i].className = slideButtons[i].className.replace(
      " active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  slideButtons[slideIndex - 1].className += " active";
}
