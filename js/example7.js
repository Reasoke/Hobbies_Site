document.addEventListener("mousemove", (e) => {
    const el = document.querySelector("#mouseData");

    if (el) {
        el.innerHTML = "mouse X: " + e.offsetX + " Y: " + e.offsetY;
    }
});

document.addEventListener("keydown", (e) => {
    const el = document.querySelector("#keyboardData");

    if (el) {
        el.innerHTML = "Keyboard: " + e.code;
    }
});  