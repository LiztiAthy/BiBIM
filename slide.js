const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider img');
const navDots = document.querySelectorAll('.slider-nav a');

function navigateSlider(index) {
    const slideWidth = slides[index].clientWidth;
    slider.scrollLeft = slideWidth * index;
    updateActiveDot(index);
}

function updateActiveDot(index) {
    navDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initial setup: set first dot as active
updateActiveDot(0);

// Optional: Automatically update active dot on scroll
slider.addEventListener('scroll', () => {
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    updateActiveDot(index);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});