document.addEventListener('DOMContentLoaded', (event) => {
    const homeButton = document.getElementById('homeButton');

    homeButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        // Add your desired functionality here
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
});
