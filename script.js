document.addEventListener("DOMContentLoaded", function () {
  var headshot = document.getElementById("headshot");
  var heroText = document.querySelector(".hero-text");

  // Small delay so the entrance animation feels intentional
  setTimeout(function () {
    if (heroText) {
      heroText.classList.add("is-visible");
    }
  }, 100);

  setTimeout(function () {
    if (headshot) {
      headshot.classList.add("is-visible");
    }
  }, 280);

  // Smooth scroll for in-page nav links (extra support for older browsers)
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      var target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
