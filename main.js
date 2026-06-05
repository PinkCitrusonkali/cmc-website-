// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hamburger menu
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  links.classList.toggle('open');
  btn.classList.toggle('active');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  });
});

// Awards Slider
let currentSlide = 0;
const totalSlides = 3;

function slideAward(dir) {
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function updateSlider() {
  document.getElementById('awardsSlider').style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

// Touch swipe support
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) slideAward(diff > 0 ? 1 : -1);
});

// FAQ Accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Kurs Accordion
function toggleKurs(header) {
  const card = header.closest('.kurs-card-accordion');
  const isOpen = card.classList.contains('open');
  card.classList.toggle('open', !isOpen);
}

// Cookie banner
function closeCookie() {
  const banner = document.getElementById('cookieBanner');
  banner.classList.add('hide');
  setTimeout(() => banner.remove(), 400);
}

// Show cookie banner after short delay
setTimeout(() => {
  document.getElementById('cookieBanner').classList.add('show');
}, 800);
