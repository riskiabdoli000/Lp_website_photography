// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    // Add aria-expanded attribute initially for accessibility
    mobileMenuBtn.setAttribute('aria-expanded', 'false');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const isExpanded = navLinks.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Run animation only once
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll('.fade-up-on-scroll').forEach((el) => {
    observer.observe(el);
});

// Scroll to Top Button Visibility
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 2) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
}

// Testimonials Slider Logic
const testimonialsGrid = document.querySelector('.testimonials-grid');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (prevBtn && nextBtn && testimonialsGrid) {
    // Calculate the scroll amount dynamically based on card width + gap
    const getScrollAmount = () => {
        const card = testimonialsGrid.querySelector('.testimonial-card');
        const gap = parseInt(window.getComputedStyle(testimonialsGrid).gap) || 24;
        return card ? card.offsetWidth + gap : 350;
    };

    prevBtn.addEventListener('click', () => {
        testimonialsGrid.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        testimonialsGrid.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
}
