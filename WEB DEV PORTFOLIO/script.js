document.addEventListener('DOMContentLoaded', function() {
    const aboutCards = document.querySelectorAll('.about-card');
    const skillItems = document.querySelectorAll('.skill-item');
    const projectCards = document.querySelectorAll('.project-card');
    const aboutObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = [...aboutCards].indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.3}s`;
          entry.target.classList.add('visible');
          aboutObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    aboutCards.forEach(card => {
      aboutObserver.observe(card);
    });

    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = [...skillItems].indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.1}s`;
          entry.target.classList.add('visible');
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    skillItems.forEach(item => {
      skillObserver.observe(item);
    });

    const projectObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = [...projectCards].indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0}s`;
          entry.target.classList.add('visible');
          projectObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    projectCards.forEach(card => {
      projectObserver.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heroContainer = document.querySelector('.hero-container');
    const heroImgWrapper = document.querySelector('.hero-img-wrapper');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(heroContainer);
    observer.observe(heroImgWrapper);
  });
  
  
