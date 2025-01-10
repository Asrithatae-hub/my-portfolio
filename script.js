document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact form submission (just an example, replace with actual functionality)
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted!');
    });
});