document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

let navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
    
    if (scrollTop === 0) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
    
    lastScrollTop = scrollTop;
});

const photoItems = document.querySelectorAll('.photo-item');
const photoUrls = [
    '/assets/1_img.jpg',
    '/assets/2_img.jpg',
    '/assets/3_img.jpg',
    '/assets/4_img.jpg',
    '/assets/5_img.jpg',
    '/assets/6_img.jpg',
    '/assets/7_img.jpg',
    '/assets/8_img.jpg',
    '/assets/9_img.jpg',
    '/assets/10_img.jpg',
    '/assets/11_img.jpg',
    '/assets/12_img.jpg',
    '/assets/13_img.jpg',
    '/assets/14_img.jpg',
    '/assets/15_img.jpg',
    '/assets/16_img.jpg',
    '/assets/17_img.jpg',
    '/assets/18_img.jpg',
    '/assets/19_img.jpg',
    '/assets/20_img.jpg',
    '/assets/21_img.jpg',
    '/assets/22_img.jpg',
    '/assets/23_img.jpg',
    '/assets/24_img.jpg'
];

photoItems.forEach((item, index) => {
    item.style.backgroundImage = `url(${photoUrls[index]})`;
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});