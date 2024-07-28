let navbar = document.querySelector(".nav");
fetch ("/nav.html")
.then(res=>res.text())
.then(data=> {
    navbar.innerHTML = data
})