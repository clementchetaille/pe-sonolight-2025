document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("#filter-buttons button");
  const productsContainer = document.getElementById("products-container");
  const searchInput = document.getElementById("search-input");

  let activeFilter = null; // garde en mémoire le filtre actif
  let produitsGlobal = []; // on garde tous les produits chargés

  // Récupérer le paramètre search depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("search") || "";

  // Charger les produits depuis le JSON
  fetch("produits.json")
    .then((res) => res.json())
    .then((produits) => {
      produitsGlobal = produits;

      // Si un paramètre search est présent, le mettre dans la barre et appliquer
      if (searchParam) {
        if (searchInput) searchInput.value = searchParam;
      }

      appliquerFiltres();

      // Gestion des boutons filtres
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const isActive = btn.classList.contains("active");
          const cat = btn.dataset.categorie;

          // On enlève l'état actif de tous les boutons
          filterButtons.forEach((b) => b.classList.remove("active"));

          if (isActive) {
            activeFilter = null; // plus de filtre actif
          } else {
            btn.classList.add("active");
            activeFilter = cat === "All" ? null : cat; // sauvegarde du filtre actif
          }

          appliquerFiltres();
        });
      });

      // Gestion de la recherche en temps réel
      if (searchInput) {
        searchInput.addEventListener("input", () => {
          appliquerFiltres();
        });
      }
    });

  // Applique recherche + filtre
  function appliquerFiltres() {
    let produitsFiltres = [...produitsGlobal];

    // Appliquer le filtre actif
    if (activeFilter) {
      produitsFiltres = produitsFiltres.filter((p) => {
        if (Array.isArray(p.categorie)) {
          return p.categorie.includes(activeFilter);
        }
        return p.categorie === activeFilter;
      });
    }

    // Appliquer la recherche
    const recherche = searchInput ? searchInput.value.toLowerCase() : "";
    if (recherche) {
      produitsFiltres = produitsFiltres.filter(
        (p) =>
          p.nom.toLowerCase().includes(recherche) ||
          p.description.toLowerCase().includes(recherche)
      );
    }

    afficherProduits(produitsFiltres);
  }

  // Affiche les produits
  function afficherProduits(produits) {
    productsContainer.innerHTML = "";
    if (produits.length === 0) {
      productsContainer.innerHTML = "<p>Aucun produit trouvé</p>";
      return;
    }

    produits.forEach((p) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${p.image}" alt="${p.nom}">
        <h3>${p.nom}</h3>
        <p>${p.description}</p>
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
      `;
      productsContainer.appendChild(card);
    });
  }

  // =====================
  // Effet machine à écrire
  // =====================
  const words = [
    "l'achat de matériel DJ",
    "les enceintes de monitoring pour home studio",
    "l'équipement pour home studio",
    "le matériel sono professionnel",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  // Détecte si c'est mobile au chargement
  const isMobile = window.innerWidth <= 768;
  const speed = isMobile ? 110 : 50; // 100ms sur mobile, 50ms sur desktop
  const wordElement = document.getElementById("changing-word");

  function typeEffect() {
    if (!wordElement) return; // sécurité si l'élément n'existe pas
    const currentWord = words[wordIndex];

    if (!deleting) {
      wordElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1500); // pause avant suppression
        return;
      }
    } else {
      wordElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(typeEffect, deleting ? speed / 2 : speed);
  }

  typeEffect(); // lance l'effet
});
