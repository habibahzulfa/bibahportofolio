document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const reveals = document.querySelectorAll(".reveal, .animated-text");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));

document.querySelectorAll(".disabled-link").forEach(card => {
  card.addEventListener("click", function(e) {
    e.preventDefault();
  });
});

const sliders = document.querySelectorAll(".project-slider");
sliders.forEach(slider => {
  const slides = slider.querySelectorAll(".slide");
  let current = 0;
  slides[current].classList.add("active");
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
});
