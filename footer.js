document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer").innerHTML = `
<footer class="footer-container">
  <div class="footer-logo">
    <img src="images/logo-pe-sono.png" alt="logo-pe-sonolight" />
  </div>

  <div class="footer-links">
    <div class="footer-nosentites">
      <h2>Nos autres entités</h2>
      <p><a href="https://www.prestige-evenements.fr/" class="couleur-lien" target="_blank">Prestige Évènements</a></p>
      <p><a href="https://www.prestige-effects.fr/" class="couleur-lien" target="_blank">Prestige Effects</a></p>
    </div>

    <div class="footer-contact">
      <h2>Contact</h2>
      <p>
        167 Av. Alphonse Lavallée<br>
        83130, La Garde<br>
        04 94 20 75 10<br>
        <a href="mailto:contact@pesonolight.fr" class="couleur-lien">contact@pesonolight.fr</a>
      </p>
    </div>

    <div class="footer-apropos">
      <h2>Liens utiles</h2>
      <p><a href="apropos.html" class="couleur-lien">À propos de PE Sono Light</a></p>
      <p><a href="https://www.prestige-effects.fr/" class="couleur-lien" target="_blank">Pass Culture</a></p>
      <p><a href="contact.html" class="couleur-lien">Contacts</a></p>
    </div>
  </div>
</footer>
  `;
});
