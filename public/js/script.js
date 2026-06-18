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

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

const applyTheme = (theme) => {
  root.setAttribute("data-theme", theme);

  if (themeToggle) {
    themeToggle.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
};

applyTheme(localStorage.getItem("wanderlust-theme") === "dark" ? "dark" : "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("wanderlust-theme", nextTheme);
    applyTheme(nextTheme);
  });
}

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = searchInput.value.toLowerCase();
    const listings = document.querySelectorAll(".listing-card");

    listings.forEach((card) => {
      const text = card.textContent.toLowerCase();

      if (text.includes(query)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
}

const taxSwitch = document.getElementById("switchCheckDefault");

if (taxSwitch) {
  taxSwitch.addEventListener("change", () => {
    const taxInfo = document.getElementsByClassName("taxInfo");

    for (let info of taxInfo) {
      info.style.display = taxSwitch.checked ? "inline" : "none";
    }
  });
}

const flashMessages = document.querySelectorAll("#flashMessages [data-message]");

flashMessages.forEach((node) => {
  if (typeof Toastify === "undefined") return;

  const type = node.dataset.type;

  Toastify({
    text: node.dataset.message,
    duration: 3500,
    gravity: "top",
    position: "right",
    close: true,
    stopOnFocus: true,
    className: type === "success" ? "toastify-success" : "toastify-error",
  }).showToast();
});
