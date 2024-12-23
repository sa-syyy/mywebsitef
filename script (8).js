const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");

// Show dropdown when input is focused or has value
searchInput.addEventListener("input", () => {
    if (searchInput.value.trim()) {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

// Hide dropdown on outside click
document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
});

// Add click functionality for dropdown items
document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
        searchInput.value = item.textContent;
        dropdown.style.display = "none";
    });
});
