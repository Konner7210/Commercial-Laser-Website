document.addEventListener('DOMContentLoaded', (event) => {
    const home = document.getElementById('home');

    home.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        // Add your desired functionality here
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
});
