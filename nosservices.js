document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Fermer toutes les autres cartes
      serviceCards.forEach((otherCard) => {
        otherCard.classList.remove("active");
      });

      // Si la carte cliquée n'était pas active, l'activer
      if (!isActive) {
        this.classList.add("active");
      }
    });
  });

  // Gestion du clavier pour l'accessibilité
  serviceCards.forEach((card) => {
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });

    // Rendre les cartes focusables
    card.setAttribute("tabindex", "0");
  });
});
