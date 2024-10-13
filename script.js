

let typed = new Typed (".text", {
    strings: ["frontend developer", "web designer", "teacher"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay: 1000
});

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    gap    : '2rem',
    focus  : "center",
    drag   : 'free',
    autoWidth: true,
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
  
      },
    },
   
  } );
  
  splide.mount();

