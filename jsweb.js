// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Section Animations
    const sections = document.querySelectorAll('.animate-section, .landing-section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(entry.target.classList.contains('landing-section')){
                    entry.target.style.animation = `fadeInScale 1s ease-out forwards`;
                } else {
                    entry.target.style.animation = `fadeInUp 1s ease-out forwards`;
                }
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll to Top Functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = "block";
            scrollToTopBtn.style.opacity = "1";
        } else {
            scrollToTopBtn.style.display = "none";
            scrollToTopBtn.style.opacity = "0";
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hide Loading Spinner
    window.addEventListener('load', () => {
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.opacity = '0';
        spinner.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            spinner.style.display = 'none';
        }, 500);
    });
});
