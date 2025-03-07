const slides = [
  { 
    "title": "Refined Timepieces", 
    "subtitle": "Choose Luxury, Choose Us",
    "description": "Explore the ideal timepiece for any moment and enhance your style with timeless sophistication and impeccable craftsmanship.",
    "price": "$599.00",
    "image": "image/watch1.png",
    "background": "#FF5733"
  },
  { 
    "title": "Exclusive Watches", 
    "subtitle": "Timeless Elegance",
    "description": "Experience premium craftsmanship with our latest collection of high-end watches for all occasions.",
    "price": "$799.00",
    "image": "image/watch2.png",
    "background": "#28A745"
  },
  { 
    "title": "Classic Edition", 
    "subtitle": "Style That Lasts",
    "description": "Upgrade your collection with our signature timepieces, crafted with precision and excellence.",
    "price": "$999.00",
    "image": "image/watch3.png",
    "background": "#007BFF"
  }
];

let currentIndex = 0;

function updateSlide() {
    const content = document.getElementById("content");
    const image = document.getElementById("slider-image");
    const sliderContainer = document.querySelector(".slider-container");

    content.innerHTML = `
        <h1>${slides[currentIndex].title}</h1>
        <h2>${slides[currentIndex].subtitle}</h2>
        <h3 style="color: black;">${slides[currentIndex].description}</h3>
        <div class="price">${slides[currentIndex].price}</div>
        <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
    `;

    image.src = slides[currentIndex].image;
    sliderContainer.style.background = slides[currentIndex].background;
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlide();
}

function nextSlide() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlide();
}


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


updateSlide();