document.getElementById("themeToggle").addEventListener("click", function() {
    var right = document.getElementById("right-div");
    var left = document.getElementById("left-div");
    right.classList.toggle("dark-mode");
    left.classList.toggle("dark-mode");

    var themeIcon = document.getElementById("themeIcon");
    var statusText = document.getElementById("statusText");

    if (right.classList.contains("dark-mode")) {
        themeIcon.src = "img/lune.png";
        themeIcon.alt = "Mode Sombre";
        statusText.textContent = "Toggle Light Mode";
    } else {
        themeIcon.src = "img/soleil.png";
        themeIcon.alt = "Mode Clair";
        statusText.textContent = "Toggle Dark Mode";
    }
 })