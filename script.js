alert("JavaScript is connected!");
// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ==============================
// SMOOTH SCROLLING
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});