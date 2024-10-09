/* nav hide/show */
var prePosition = window.scrollY;
window.onscroll = () => {
    var currPosition = window.scrollY;
    if(prePosition > currPosition) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "20";
    }

    currPosition = prePosition;
}


let typed = new Typed (".text", {
    strings: ["frontend developer", "web designer", "teacher"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay: 1000
});

const swiper = new Swiper('.project-wrapper', {
    loop: true,
    spaceBetween : 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints : {
        1650 : {
            slidesPerView : 4
        },
        1024 : {
            slidesPerView : 3
        },
        780 : {
            slidesPerView : 2
        },
        420 : {
            slidesPerView : 1
        },
        
    }

  }); 

