const carousel = document.getElementById('carousel');
const track = carousel.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const cards = Array.from(track.children);
let activeIndex = 0;
const step = cards[0]?.getBoundingClientRect().width + 18 || 300;

function updateCarousel() {
  const offset = -activeIndex * step;
  track.style.transform = `translateX(${offset}px)`;
}

prevButton?.addEventListener('click', () => {
  activeIndex = Math.max(0, activeIndex - 1);
  updateCarousel();
});

nextButton?.addEventListener('click', () => {
  activeIndex = Math.min(cards.length - 1, activeIndex + 1);
  updateCarousel();
});

let autoSlide = setInterval(() => {
  activeIndex = activeIndex < cards.length - 1 ? activeIndex + 1 : 0;
  updateCarousel();
}, 4500);

carousel?.addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});

carousel?.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    activeIndex = activeIndex < cards.length - 1 ? activeIndex + 1 : 0;
    updateCarousel();
  }, 4500);
});

const heroVisual = document.querySelector('.hero-visual');
const layers = heroVisual ? heroVisual.querySelectorAll('.parallax-layer') : [];

window.addEventListener('scroll', () => {
  const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  layers.forEach((layer, index) => {
    const speed = 12 + index * 8;
    layer.style.transform = `translate3d(0, ${scrollFraction * speed}px, 0)`;
  });
});

heroVisual?.addEventListener('mousemove', (event) => {
  const rect = heroVisual.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  layers.forEach((layer, index) => {
    const intensity = (index + 1) * 10;
    layer.style.transform = `translate3d(${x * intensity}px, ${y * intensity}px, 0)`;
  });
});

heroVisual?.addEventListener('mouseleave', () => {
  layers.forEach((layer) => {
    layer.style.transform = 'translate3d(0, 0, 0)';
  });
});
