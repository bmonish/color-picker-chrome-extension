document.addEventListener("DOMContentLoaded", function () {
  const bgColorPicker = document.getElementById("bgColor");
  const bgHex = document.getElementById("bgHex");

  function updateHexCode(colorPicker, hexSpan) {
    hexSpan.textContent = colorPicker.value.toUpperCase();
  }

  bgColorPicker.addEventListener("input", () =>
    updateHexCode(bgColorPicker, bgHex)
  );

  // Initialize hex code displays
  updateHexCode(bgColorPicker, bgHex);
});
