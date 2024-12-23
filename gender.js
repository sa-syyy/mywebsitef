
document.getElementById('gender-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  if (selectedGender) {
    alert(`You selected: ${selectedGender.value}`);
    // Add logic to handle the next steps
  } else {
    alert('Please select a gender to continue.');
  }
});

// Progress indicator logic (optional)
const dots = document.querySelectorAll('.progress-indicator .dot');
dots[0].classList.add('active');
