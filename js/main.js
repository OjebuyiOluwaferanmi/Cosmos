(function ($) {
  "use strict";

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggers = document.querySelectorAll(".popover-trigger");
  popoverTriggers.forEach(function (popoverTrigger) {
    new bootstrap.Popover(popoverTrigger, {
      trigger: "hover",
      placement: "top", // Ensures popover appears on top
    });
  });
});

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".change-content");
  const title = document.getElementById("card-title");
  const author = document.getElementById("card-author");
  const image = document.getElementById("card-image");

  function updateCard(button) {
    title.textContent = button.getAttribute("data-title");
    author.textContent = button.getAttribute("data-author");
    image.src = button.getAttribute("data-image");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      updateCard(this);
    });
  });

  // Set default content (Celestia)
  updateCard(buttons[0]);
});
