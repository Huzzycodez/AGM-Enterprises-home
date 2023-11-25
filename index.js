const menuBtn = document.querySelector(".menu-Btn");
const navigation = document.querySelector(".navigation_items");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', function () {
  const cardSwiper = new Swiper('.card_swiper', {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      620: {
        slidesPerView: 2,
      },
      980: {
        slidesPerView: 3,
      },

    },
  });
});








const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 30000,
    },
    loop: true,
    slidesPerView: 3, // Set the number of slides you want to display
    spaceBetween: 20, // Set the space between slides
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  



  document.addEventListener('DOMContentLoaded', function () {
    // Function to animate the counter
    function animateCounter(counterElement, targetCount) {
        let currentCount = 0;
        const animationDuration = 2000; // Duration in milliseconds
        const countIncrement = targetCount / (animationDuration / 16); // 60 frames per second

        function updateCounter() {
            currentCount += countIncrement;
            counterElement.textContent = Math.floor(currentCount);

            if (currentCount < targetCount) {
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.textContent = targetCount;
            }
        }

        updateCounter();
    }

    // Callback function for the Intersection Observer
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const targetCount = counter.getAttribute('data-count');
                    animateCounter(counter, targetCount);
                });

                // Unobserve the target once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, // Trigger when 50% of the target is visible
    });

    // Target the container to observe
    const targetContainer = document.getElementById('targetContainer');
    observer.observe(targetContainer);
});

  

          


$(window).on('load', function () {
  $(".flow_filter").isotope({
      itemSelector: '.card',
      layoutMode: 'fitRows'
  });
});

$(".fliter_head ul li a").click(function () {
  $(".fliter_head ul li a").removeClass("active");
  $(this).addClass("active");
  var selector = $(this).attr("data-filter");
  $(".flow_filter").isotope({
      filter: selector
  });
  return false;
});






$(document).ready(function () {
  ScrollReveal({
    reset: true,
    duration: 2500,
    delay: 0,
  });


ScrollReveal().reveal('.upper li,.top ', {origin: 'top', interval: 500, distance: '200px', duration: 1000, reset: true });
ScrollReveal().reveal('.left', { origin: 'left', interval: 200, distance: '200px', duration: 2000, reset: true });
ScrollReveal().reveal('.right', { origin: 'right', interval: 200, distance: '200px', duration: 2000, reset: true });
ScrollReveal().reveal('.bottom ', { origin: 'bottom', interval: 300, distance: '200px', duration: 2000, reset: true });
ScrollReveal().reveal('.stop', { origin: 'bottom', interval: 300, distance: '1px', duration: 1000, reset: false ,delay: 150, });

});