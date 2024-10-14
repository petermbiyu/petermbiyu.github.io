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


// projects JS

const carousel = document.getElementsByClassName("card-list")[0];
firstItem = carousel.getElementsByClassName("card-items")[0];
arrowIcon = document.querySelectorAll(".project-wrapper .icon");
console.log (arrowIcon)




let isDragStart = false, prevPageX, prevScrollLeft;
// updating global variables values on mouse down event
let itemWidth = firstItem.clientWidth + 20;

arrowIcon.forEach(item => {
    item.addEventListener("click", () => {
        carousel.scrollLeft += item.id == "prev" ? -itemWidth : itemWidth;
    });
}); 

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
}



const dragstop = () => {
    isDragStart = false;
}


const dragging = (e) => {
    //scrolling items to the left according to mouse pointer
    if (!isDragStart) return
    e.preventDefault ();
    carousel.scrollLeft = e.pageX;
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", dragstop)


// End of projects JS
