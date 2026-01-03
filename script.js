// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Logic ---
    const burger = document.querySelector('.burger');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    const navLinks = document.querySelectorAll('.mobile-link');

    // Toggle menu
    burger.addEventListener('click', () => {
        navOverlay.classList.toggle('active');
        burger.classList.toggle('toggle');
        // Prevent background scrolling when menu is open
        document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navOverlay.classList.remove('active');
            burger.classList.remove('toggle');
            document.body.style.overflow = 'auto';
        });
    });

    // --- Smooth Scroll Fallback (for older browsers, though CSS handles mostly) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

