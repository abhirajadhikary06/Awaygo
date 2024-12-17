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

// Smooth Scroll for Buttons (except Testimonial and Contact Us)
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

// Prevent Scroll on "Testimonial" and "Contact Us" (Remove smooth scroll behavior)
document.querySelectorAll('a[href="#testimonial"], a[href="#contact"]').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the smooth scroll for these sections
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.location.href = `#${targetId}`; // Navigate directly to the section
        }
    });
});
