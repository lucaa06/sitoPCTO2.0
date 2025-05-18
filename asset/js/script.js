function navigateTo(url) {
    window.location.href = url;
  }
  
  // Optional scroll reveal effect (on scroll animations)
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".card, .logo-partner");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    elements.forEach(el => observer.observe(el));
  });
  // EFFETTI ANIMATI SCROLL-IN
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate__animated");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInUp");
          entry.target.style.opacity = 1;
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedElements.forEach(el => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  });
  
  // NAVIGAZIONE RAPIDA (opzionale)
  function navigateTo(url) {
    window.location.href = url;
  }
// EFFETTI ANIMATI SCROLL-IN
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate__animated");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInUp");
          entry.target.style.opacity = 1;
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedElements.forEach(el => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  });
  
  // NAVIGAZIONE RAPIDA (opzionale)
  function navigateTo(url) {
    window.location.href = url;
  }
    