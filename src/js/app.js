// Testimonial Data
const testimonials = [
    {
        name: " Mark Martin",
        location: "London, UK",
        rating: 5.0,
        comment: "Aurea App completely changed the way I practice! I can track my daily sessions and see real progress every week.",
        image: "./images/user1.png"
    },
    {
        name: "Alice Kim",
        location: "Seoul, South Korea",
        rating: 4.8,
        comment: "I love how the app breaks down my practice goals. It’s perfect for keeping me motivated and consistent.",
        image: "./images/user2.png"
    },
    {
        name: "John Gonzalez",
        location: "Madrid, Spain",
        rating: 4.9,
        comment: "As a piano teacher, Aurea App helps me monitor my students’ progress remotely. Highly recommended!",
        image: "./images/user3.png"
    },
    {
        name: "Liam Chen",
        location: "Sydney, Australia",
        rating: 5.0,
        comment: "The app’s practice reminders and progress tracking make practicing fun and structured. I’ve improved so much.",
        image: "./images/user1.png"
    },
    {
        name: "Sophie Williams",
        location: "New York, USA",
        rating: 4.7,
        comment: "I’ve tried many practice apps, but Aurea App is by far the most user-friendly and motivating.",
        image: "./images/user2.png"
    },
    {
        name: "Alex Rodriguez",
        location: "Toronto, Canada",
        rating: 4.8,
        comment: "Tracking my scales and pieces has never been easier. The insights help me focus on what matters most.",
        image: "./images/user3.png"
    },
    {
        name: "James Thompson",
        location: "Berlin, Germany",
        rating: 5.0,
        comment: "I finally feel in control of my practice schedule. Aurea App keeps me accountable and helps me reach my musical goals.",
        image: "./images/user1.png"
    }
];


// Initialize Swiper
const swiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make pagination clickable
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// Generate testimonial slides
function generateTestimonials() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="p-8 border-2 border-gray-200 rounded-2xl hover:border-primary transition-all">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                        <div>
                            <h4 class="font-medium text-lg">${testimonial.name}</h4>
                            <p class="text-gray-400">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="./images/star.png" alt="star" class="w-4 h-4">
                    </div>
                </div>
                <p class="text-gray-600">"${testimonial.comment}"</p>
            </div>
        `;
        
        swiperWrapper.appendChild(slide);
    });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', generateTestimonials);


const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

function openMenu() {
  menu.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
}

function closeMenu() {
  menu.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
}

hamburger.addEventListener('click', () => {
  if (menu.classList.contains('-translate-x-full')) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Close menu when clicking overlay
overlay.addEventListener('click', closeMenu);
