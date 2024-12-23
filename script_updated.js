// JavaScript for toggling between forms with smooth transitions
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

// Update text for heading to "InterestSphere Welcome's you"
const headings = document.querySelectorAll('.form h2');
headings.forEach(heading => {
    heading.textContent = "InterestSphere Welcome's you";
});

function toggleForms(showForm, hideForm) {
    hideForm.style.opacity = '0';
    setTimeout(() => {
        hideForm.classList.add('hidden');
        showForm.classList.remove('hidden');
        setTimeout(() => {
            showForm.style.opacity = '1';
        }, 50);
    }, 300);
}

signupLink.addEventListener('click', () => {
    toggleForms(signupForm, loginForm);
});

loginLink.addEventListener('click', () => {
    toggleForms(loginForm, signupForm);
});
