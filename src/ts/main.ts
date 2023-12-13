import "./../scss/style.scss";

window.addEventListener("load", () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  }, options);

  const arrowObservers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("arrow--show");
      } else {
        entry.target.classList.remove("arrow--show");
      }
    });
  }, options);

  const boxes = document.getElementsByClassName("box");
  const arrow = document.getElementsByClassName("arrow");

  if (boxes) {
    for (let i = 0; i < boxes.length; i++) {
      observer.observe(boxes[i]);
    }
  }

  if (arrow) {
    for (let i = 0; i < arrow.length; i++) {
      arrowObservers.observe(arrow[i]);
    }
  }
});
