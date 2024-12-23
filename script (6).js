document.addEventListener("DOMContentLoaded", () => {
  // Handle navigation clicks
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      alert(`Navigating to ${item.id} page.`);
    });
  });

  // Handle search bar functionality
  const searchBar = document.querySelector(".search-bar input");
  searchBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      alert(`Searching for: ${searchBar.value}`);
    }
  });

  // Simulate dynamic loading of ideas
  setTimeout(() => {
    document.querySelector(".loading-message p").textContent =
      "Your feed is now personalized with new ideas!";
    document.querySelector(".loader").style.display = "none";
  }, 3000); // 3-second delay
});
