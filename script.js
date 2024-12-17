// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 100);
});

// Menu Toggle
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};

// Smooth Scroll for Buttons
document.querySelector(".btn2").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector("#destination").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector("#package").scrollIntoView({
        behavior: "smooth"
    });
});
