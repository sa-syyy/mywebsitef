document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    const searchInput = document.getElementById("search");
    const loading = document.getElementById("loading");

    let pins = []; // Array to store pins
    let page = 1; // Current page for infinite scroll
    const pinsPerPage = 10; // Number of pins to load per page

    // Simulate backend data
    const generatePins = (count) => {
        const newPins = [];
        for (let i = 0; i < count; i++) {
            newPins.push({
                id: pins.length + i + 1,
                image: `https://via.placeholder.com/200?text=Pin+${pins.length + i + 1}`,
                title: `Pin Title ${pins.length + i + 1}`,
            });
        }
        return newPins;
    };

    // Fetch pins from simulated backend
    const fetchPins = () => {
        loading.classList.remove("hidden");
        setTimeout(() => {
            const newPins = generatePins(pinsPerPage);
            pins = [...pins, ...newPins];
            displayPins(newPins);
            loading.classList.add("hidden");
        }, 1000); // Simulate network delay
    };

    // Display pins in the grid
    const displayPins = (pinList) => {
        pinList.forEach((pin) => {
            const pinElement = document.createElement("div");
            pinElement.classList.add("grid-item");
            pinElement.innerHTML = `
                <img src="${pin.image}" alt="${pin.title}">
                <p>${pin.title}</p>
            `;
            gridContainer.appendChild(pinElement);
        });
    };

    // Infinite scroll functionality
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            page++;
            fetchPins();
        }
    };

    // Filter pins based on search input
    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredPins = pins.filter((pin) =>
            pin.title.toLowerCase().includes(searchTerm)
        );
        gridContainer.innerHTML = "";
        displayPins(filteredPins);
    };

    // Initial load
    fetchPins();

    // Event listeners
    searchInput.addEventListener("input", handleSearch);
    window.addEventListener("scroll", handleScroll);
});
