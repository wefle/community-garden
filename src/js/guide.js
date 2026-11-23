const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both";
    }
  });
}, {
  threshold: 0.25,
});

const cardItems = document.querySelectorAll(".cards__item");

cardItems.forEach(cardItem => {
    observer.observe(cardItem);
});