console.log("JavaScript is working!")

//----------Closes / unchecks Navigation when a ul li a link is clicked------------
const navToggle = document.querySelector('#active');
  const navLinks = document.querySelectorAll('ul li a');

  navLinks.forEach(link => 
  {
    link.addEventListener('click', () => 
    {
      active.checked = false;
    });
  });
//--------------------Glider configuration--------------------------
new Glider(document.querySelector('.glider'), {

    slidesToShow: 1,
    draggable: true,
    dots: '#dots',
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next"
    },
  
    //--------------Responsive breakpoints--------------------------
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          scrollLock: false,
        }
      }
    ]
  });
//------------------Particle Configuration--------------------------
  particlesJS("underwater", {
    particles:{
      number:{
        value: 80,
        density:{
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: ["#fff","#2196f3","#f44336","#ffc107"]
      },
      shape: {
        type: ["circle","edge","polygon","triangle"],
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      size:{
        value: 2,
        random: true,
        anim:{
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked:{
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move:{
        enable: true,
        speed: 1,
        direction: "top",
        random: true,
        out_mode: "out",
        attract:{
          enable: false
        }
      }
    },
    interactivity:{
      detect_on: "canvas",
      events:{
        onhover:{
          enable: true,
          mode: "repulse"
        }
      },
      modes:{
        grab:{
          distance: 400
        },
        bubble:{
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse:{
          distance: 100,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  })
  //-----------------------------------------------------------------//
  