document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = `
    <header>
      <div class="logo">
        <a href="index.html">
          <img src="images/logo-pesonopetit.png" alt="Logo" class="logo-img" />
        </a>
      </div>

      <!-- Menu desktop -->
      <nav class="main-nav">
        <ul class="nav-list">
          <li><a href="index.html">Accueil</a></li>
          <li><a href="nosproduits.html">Nos produits</a></li>
          <li><a href="nosservices.html">Nos services</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul class="sidebarMenuInner">
      <li><span>MENU</span></li>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="nosproduits.html">Nos produits</a></li>
      <li><a href="nosservices.html">Nos services</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="apropos.html">À propos</a></li>
    </ul>
  </div>
    </header>
  `;
});
