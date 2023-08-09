  // Function to animate the numbers
  function animateNumbers() {
    var counters = document.querySelectorAll('.counter');
    var speed = 500; // Adjust the speed of animation (in milliseconds)

    counters.forEach(function (counter) {
      var target = +counter.innerText;
      var count = 0;
      var step = target / speed;

      var timer = setInterval(function () {
        count += step;
        if (count >= target) {
          clearInterval(timer);
          count = target;
        }
        counter.innerText = Math.floor(count);
      }, 1);
    });
  }

  // Trigger the number animation when the container is visible
  function handleIntersection(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateNumbers();
      }
    });
  }

  // Create an intersection observer
  var options = {
    threshold: 0.5 // Adjust the threshold value as needed
  };
  var observer = new IntersectionObserver(handleIntersection, options);

  // Start observing the "myself" container
  var myselfContainer = document.querySelector('.about-myself');
  observer.observe(myselfContainer);