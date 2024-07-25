document.addEventListener('DOMContentLoaded', function() {
    // Function to reveal text on the landing page
    const revealButton = document.getElementById('revealButton');
    const revealText = document.getElementById('revealText');

    if (revealButton && revealText) {
        revealButton.addEventListener('click', function() {
            if (revealText.style.display === 'none') {
                revealText.style.display = 'block';
            } else {
                revealText.style.display = 'none';
            }
        });
    }

    // Function to validate the registration form
    const form = document.getElementById('registrationForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            let valid = true;

            // Name validation
            if (name === '') {
                valid = false;
                document.getElementById('nameError').textContent = 'Name is required';
            } else {
                document.getElementById('nameError').textContent = '';
            }

            // Email validation
            if (email === '') {
                valid = false;
                document.getElementById('emailError').textContent = 'Email is required';
            } else {
                document.getElementById('emailError').textContent = '';
            }

            // Password validation
            if (password === '') {
                valid = false;
                document.getElementById('passwordError').textContent = 'Password is required';
            } else {
                document.getElementById('passwordError').textContent = '';
            }

            if (!valid) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }
});
