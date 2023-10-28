console.log("JavaScript is working!")

// Glider configuration
new Glider(document.querySelector('.glider'), {

    slidesToShow: 1,
    draggable: true,
    dots: '#dots',
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next"
    },
  
    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          scrollLock: false,
        }
      }
    ]
  });