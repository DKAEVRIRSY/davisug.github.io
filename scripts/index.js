// Get the Sign In button and loader element
const signinButton = document.getElementById('signin-button');
const loader = document.getElementById('loader');

// Add an event listener to the Sign In button
signinButton.addEventListener('click', function () {
    //blury effect
    signinButton.style.backdropFilter = 'blur(20px)';
    // Hide the Sign In button
    signinButton.style.display = 'none';

    // Show the loader
    loader.style.display = 'block';

    // Simulate a loading time (3 seconds)... 3000
    setTimeout(() => {
        // Hide the loader after the "loading" time
        loader.style.display = 'none';

        // Simulate a success and redirect to 2.html
        window.location.href = "2.html"; // This will redirect to 2.html
    }, 3000);
});