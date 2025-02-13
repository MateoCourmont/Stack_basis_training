document.getElementById("darkModeToggle").addEventListener("change", function() {
    var right = document.getElementById("right-div");
    var left = document.getElementById("left-div");
    right.classList.toggle("dark-mode");
    left.classList.toggle("dark-mode");

    var statusText = document.getElementById("statusText");
    if (this.checked) {
        statusText.textContent = "Toggle Light Mode";
    } else {
        statusText.textContent = "Toggle Dark Mode";
    }
 })