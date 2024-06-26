// Get the form element by its ID
var form = document.getElementById('signUpForm');

// Add an event listener to the form for the 'submit' event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the input fields
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Basic validation for email format
    if (!validateEmail(email)) {
        alert('Invalid email format!');
        return;
    }

    // If all validations pass, display a success message
    alert('Sign up successful!');
});

// Function to validate email format using a regular expression
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
