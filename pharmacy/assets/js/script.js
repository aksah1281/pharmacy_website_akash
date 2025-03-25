document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#0056b3"; // Darker Blue when scrolled
        } else {
            navbar.style.backgroundColor = "#007bff"; // Original Blue
        }
    });

    // Slideshow Logic (Ensures It Works Properly)
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach(slide => slide.style.display = "none"); // Hide all slides
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    showSlides(); // Start the slideshow

    // Function to reveal elements on scroll
    function revealOnScroll() {
        const sections = document.querySelectorAll(".pharmacist-section, .prescription-section, .delivery-section");
        const screenPosition = window.innerHeight / 1.3;

        sections.forEach(section => {
            if (section) {
                const sectionPosition = section.getBoundingClientRect().top;
                if (sectionPosition < screenPosition) {
                    section.classList.add("visible");
                }
            }
        });
    }

    // Run the reveal function on scroll
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once at start in case elements are already in view
});

function openContactPopup() {
    document.getElementById('contactPopup').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.contact-popup-content').style.transform = 'scale(1.0) rotate(0deg)';
    }, 10);
}

function closeContactPopup() {
    document.querySelector('.contact-popup-content').style.transform = 'scale(0.95) rotate(-3deg)';
    setTimeout(() => {
        document.getElementById('contactPopup').style.display = 'none';
    }, 400); // Allow time for the animation to finish
}


