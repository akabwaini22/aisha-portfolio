

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered by the visitor
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("emailAddress").value.trim();
    let country = document.getElementById("country").value.trim();
    let comments = document.getElementById("comments").value.trim();

    // Check if any field is empty
    if (fullName === "" || email === "" || country === "" || comments === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Check email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Show success message
    alert("Your form was submitted successfully! Thank you for your message.");

    // Clear the form
    document.getElementById("contactForm").reset();

});
}

/* Elegant Scroll Reveal */

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    if (!("IntersectionObserver" in window)) {
        return;
    }

    sections.forEach(function (section) {
        section.classList.add("reveal");
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});

