let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar-container div a");

window.onscroll = () => {
  updateActiveLink();
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      updateActiveLink();
    }, 100); // Small delay to ensure the scroll has completed
  });
});

function updateActiveLink() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Calculate the threshold where the indicator should switch
    let sectionTopVisibility = top - offset;
    let sectionVisibilityRatio = sectionTopVisibility / height;

    // Check if the section is more than 40% visible
    if (sectionVisibilityRatio > -0.6 && sectionVisibilityRatio <= 0.4) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(".navbar-container div a[href*=" + id + "]")
        .classList.add("active");
    }
  });
}

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".wave").forEach(function (wave) {
    if (window.scrollY > 0) {
      wave.classList.add("hidden");
    } else {
      wave.classList.remove("hidden");
    }
  });
});
