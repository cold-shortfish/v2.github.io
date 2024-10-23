//MULTIPLE SLIDESHOWS ON SAME PAGE
let slideIndices = {};

function showSlides(n, slideshowId) {
  if (!slideIndices[slideshowId]) {
    slideIndices[slideshowId] = 1;
  }

  const slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
  const dots = document.querySelectorAll(`#${slideshowId} .dot`);

  if (n > slides.length) { slideIndices[slideshowId] = 1; }
  if (n < 1) { slideIndices[slideshowId] = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndices[slideshowId] - 1].style.display = "block";
  dots[slideIndices[slideshowId] - 1].className += " active";
}

function plusSlides(n, slideshowId) {
  slideIndices[slideshowId] += n;
  showSlides(slideIndices[slideshowId], slideshowId);
}

function currentSlide(n, slideshowId) {
  slideIndices[slideshowId] = n;
  showSlides(n, slideshowId);
}

document.addEventListener("DOMContentLoaded", function() {
  const slideshows = document.querySelectorAll('.slideshow-container');
  slideshows.forEach((slideshow, index) => {
    const slideshowId = `slideshow${index + 1}`;
    showSlides(1, slideshowId);
  });
});