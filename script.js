let typed = new Typed (".text", {
    strings: ["frontend developer", "web designer", "teacher"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay: 1000
});

/* let slider = tns({
    container: ".project-list",
    "slideBy": "1",
    "speed" : 400,
    "nav" : false,
    autoplay: true,
    controls : false,
    autoplayButtonOutput : false,
    responsive : {
        1650 : {
            items : 4,
            gutter : 20
        },
        1024 : {
            items : 3,
            gutter : 20
        },
        768 : {
            items : 2,
            gutter : 20
        },
        480 : {
            items : 1
        }
    }
}); */

/* scroll */
const prev = document.getElementById("btn-lft");
const next = document.getElementById("btn-rgt");
const itemList = document.getElementById("item-list");
const itemWidth = 350;
const gap = 20;

prev.addEventListener("click", () => {
    itemList.scrollLeft -= (itemWidth + gap)
});
next.addEventListener("click", () => {
    itemList.scrollLeft += (itemWidth + gap)
});
