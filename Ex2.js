document.addEventListener("DOMContentLoaded", function () {
    const colorInput = document.querySelector("#colorInput");
    const sizeInput = document.querySelector("#sizeInput");
    const fontSelect = document.querySelector("#fontSelect");
    const textInput = document.querySelector("#textInput");
    colorInput.addEventListener("input", function () {
        textInput.style.color = colorInput.value;
    });
    sizeInput.addEventListener("input", function () {
        textInput.style.fontSize = sizeInput.value + "px";
    });
    fontSelect.addEventListener("change", function () {
        textInput.style.fontFamily = fontSelect.value;
    });
});
