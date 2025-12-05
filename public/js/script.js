(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// ----------------------------
// SEARCH FORM (SAFE VERSION)
// ----------------------------
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = searchInput.value.toLowerCase();
    const listings = document.querySelectorAll(".listing-card");

    listings.forEach((card) => {
      const text = card.querySelector(".card-text").textContent.toLowerCase();

      if (text.includes(query)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
}

// ----------------------------
// TAX SWITCH (SAFE VERSION)
// ----------------------------
let taxSwitch = document.getElementById("switchCheckDefault");

if (taxSwitch) {
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("taxInfo");

    for (let info of taxInfo) {
      info.style.display = info.style.display !== "inline" ? "inline" : "none";
    }
  });
}
