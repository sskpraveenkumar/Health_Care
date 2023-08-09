$(document).ready(function() {
    // Increase carousel speed
    $('.carousel').carousel({
        interval: 1000
    });
    $(document).ready(function () {
      $('.carousel').carousel();
  });

    // Change carousel indicators color
    $('.carousel-indicators li').css('background-color', '#000');
});



// Crossfade effect
const feedbackCarousels = document.querySelectorAll(".single-feedback-carusel");

function crossfadeCarousels() {
    const currentCarousel = document.querySelector(".fade-in");
    const nextCarousel = currentCarousel.nextElementSibling || feedbackCarousels[0];

    currentCarousel.classList.remove("fade-in");
    currentCarousel.classList.add("fade-out");

    nextCarousel.classList.remove("fade-out");
    nextCarousel.classList.add("fade-in");
}

setInterval(crossfadeCarousels, 2000);
