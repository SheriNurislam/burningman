// ! Smooth scroll to anchor
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  // Event
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockId = anchor.getAttribute("href").substr(1);

    document.getElementById(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// ! Burger menu
function toggleMobileMenu() {
  document.querySelector("#mobile-menu").classList.toggle("_active");
  document.querySelector(".menu-btn").classList.toggle("_active");
}
