// Animation au scroll
document.addEventListener("DOMContentLoaded", function () {
  const servicesCard = document.querySelector(".services-card");

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(50px)";

        setTimeout(() => {
          entry.target.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, 100);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  if (servicesCard) {
    observer.observe(servicesCard);
  }

  // Animation des items de la liste
  const listItems = document.querySelectorAll(".services-list li");
  listItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-20px)";

    setTimeout(() => {
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
    }, 300 + index * 100);
  });
});
