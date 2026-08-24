/* ===============================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


/* ===============================
   MENU FILTER
================================ */

const filterButtons = document.querySelectorAll(".filter-btn");
const sweetCards = document.querySelectorAll(".sweet-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active class to selected button */

        button.classList.add("active");

        const category = button.dataset.category;

        sweetCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (
                category === "all" ||
                category === cardCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ===============================
   CONTACT FORM
================================ */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.style.color = "#b83232";
        formMessage.textContent = "Please fill in all the fields.";

        return;

    }


    /* Simple phone validation */

    if (phone.length < 10) {

        formMessage.style.color = "#b83232";
        formMessage.textContent =
            "Please enter a valid phone number.";

        return;

    }


    /* Success message */

    formMessage.style.color = "#37804a";

    formMessage.textContent =
        "Thank you! Your message has been received.";

    contactForm.reset();

});


/* ===============================
   CURRENT YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ===============================
   NAVBAR SCROLL EFFECT
================================ */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(50, 25, 15, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});