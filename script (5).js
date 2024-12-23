const interestItems = document.querySelectorAll('.interest-item');
const submitBtn = document.getElementById('submit-btn');

let selectedInterests = [];

// Toggle selection of interests
interestItems.forEach(item => {
  item.addEventListener('click', () => {
    const interest = item.getAttribute('data-interest');
    if (selectedInterests.includes(interest)) {
      selectedInterests = selectedInterests.filter(i => i !== interest);
      item.classList.remove('selected');
    } else {
      selectedInterests.push(interest);
      item.classList.add('selected');
    }

    // Enable or disable submit button based on selections
    submitBtn.disabled = selectedInterests.length === 0;
  });
});

// Handle submit button click
submitBtn.addEventListener('click', () => {
  const selectedList = selectedInterests.join(', ');
  alert(`You selected: ${selectedList}`);
});
