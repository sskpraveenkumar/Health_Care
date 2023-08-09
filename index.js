window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var element = document.getElementById("navtop");
  element.classList.add("fixed-top");
}
window.addEventListener('scroll', function() {
  if (window.pageYOffset === 0) {
    // do something when user scrolls to the top of the page
    var element = document.getElementById("navtop");
  element.classList.remove("fixed-top");
  }
});