document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-button');
    const form = document.getElementById('language-region-form');

    // Back button functionality (can redirect to the previous page)
    backButton.addEventListener('click', () => {
        window.history.back(); // Go back to the previous page
    });

    // Submit form
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const language = document.getElementById('language').value;
        const region = document.getElementById('region').value;

        console.log(`Selected Language: ${language}, Region: ${region}`);
        // Redirect or handle the next step here
        alert("Language and Region saved! Moving to the next step.");
    });
});
