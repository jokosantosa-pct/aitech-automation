// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

//HMI

let hmiIndex = 0;
const hmiSlides = document.querySelectorAll('.hmi-slide');
const hmiIndicators = document.querySelectorAll('.hmi-indicator');

// Synchronized Slideshow for Before and After
let beforeIndex = 0;
let afterIndex = 0;
const beforeSlides = document.querySelectorAll('.before-slide');
const afterSlides = document.querySelectorAll('.after-slide');
const beforeIndicators = document.querySelectorAll('.before-indicator');
const afterIndicators = document.querySelectorAll('.after-indicator');

function showBeforeSlide(index) {
    beforeSlides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    beforeIndicators.forEach((indicator, i) => {
        indicator.style.opacity = i === index ? '1' : '0.5';
    });
}

function showAfterSlide(index) {
    afterSlides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    afterIndicators.forEach((indicator, i) => {
        indicator.style.opacity = i === index ? '1' : '0.5';
    });
}

function showHMISlide(index) {
    hmiSlides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    hmiIndicators.forEach((indicator, i) => {
        indicator.style.opacity = i === index ? '1' : '0.5';
    });
}

function nextSlides() {
    beforeIndex = (beforeIndex + 1) % beforeSlides.length;
    afterIndex = (afterIndex + 1) % afterSlides.length;
    hmiIndex = (hmiIndex + 1) % hmiSlides.length;
    showBeforeSlide(beforeIndex);
    showAfterSlide(afterIndex);
    showHMISlide(hmiIndex);
}

// Auto slide every 4 seconds
setInterval(nextSlides, 4000);

// Click indicators to change slides
beforeIndicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        beforeIndex = i;
        showBeforeSlide(beforeIndex);
    });
});

afterIndicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        afterIndex = i;
        showAfterSlide(afterIndex);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form != null) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Format pesan WhatsApp
            const waMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Message:* ${encodeURIComponent(message)}`;

            // Nomor WhatsApp tujuan (ganti dengan nomor yang diinginkan)
            const phoneNumber = '33619170553'; // Nomor Indonesia tanpa tanda +

            // Buka WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${waMessage}`, '_blank');
        });
    }
});