// One small JavaScript interaction, using the DOM and event listeners.
// When one Focus item opens, close the others so the page stays tidy.
const focusItems = document.querySelectorAll(".focus-item");

focusItems.forEach(function (item) {
  item.addEventListener("toggle", function () {
    if (item.open) {
      focusItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    }
  });
});
