// Select the form and the input elements
const greetingForm = document.getElementById('greetingForm');
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');

// Add event listener for form submission
greetingForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the entered name
    const name = nameInput.value.trim();

    if (name) {
        // Update the greeting message
        greetingMessage.textContent = `Hello, ${name}! Welcome to our website!`;
        greetingMessage.classList.remove('hidden');
    } else {
        // Reset the greeting message if the input is empty
        greetingMessage.textContent = '';
        greetingMessage.classList.add('hidden');
    }

    // Clear the input field
    nameInput.value = '';
});
