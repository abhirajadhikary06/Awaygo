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

// Prevent smooth scrolling for "Testimonial" and "Contact Us", and directly redirect
document.querySelectorAll('a[href="#testimonial"], a[href="#contact"]').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent any default smooth scroll behavior
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Directly redirect to the respective section (forces jump without scroll)
            window.location.href = `#${targetId}`; // Changes URL and navigates to the section immediately
        } else {
            // In case the section doesn't exist, you can optionally redirect to another page
            window.location.href = this.getAttribute('href');
        }
    });
});

// Footer Links: Prevent moving to top and open the page link or do nothing if no link is provided
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href'); // Get the href value of the link

        // If href is empty or the link doesn't point to a valid destination, prevent default action
        if (!href || href === "#" || href === "" || href === "javascript:void(0)") {
            e.preventDefault(); // Do nothing if no valid link
        } else {
            // Redirect to the given link if it's valid
            window.location.href = href; // Navigate to the link's destination
        }
    });
});

