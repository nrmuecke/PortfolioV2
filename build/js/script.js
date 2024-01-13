document.getElementById("select").addEventListener("change", function () {
  // Hide all project items
  document
    .querySelectorAll(".jspractice, .rawhtmlcss, .tailwindpractice, .headliner")
    .forEach(function (el) {
      el.classList.add("hidden");
    });

  // Show selected project items
  var selectedValue = this.value;
  document.querySelectorAll("." + selectedValue).forEach(function (el) {
    el.classList.remove("hidden");
  });
});
