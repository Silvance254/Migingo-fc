// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show');
});

// Form Submission Handling
document.getElementById('commentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We appreciate your feedback.');
    this.reset();
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('nav ul');
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        }
    });
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 61, 124, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--primary)';
        header.style.backdropFilter = 'none';
    }
});
