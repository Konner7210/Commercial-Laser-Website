document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
document.querySelectorAll('.feature-item').forEach(item => {
  item.addEventListener('click', () => {
    window.location.href = 'your_target_url'; // Replace with your target URL
  });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'feature-item'
    var featureItems = document.querySelectorAll('.feature-item');
    
    // Add a click event listener to each element
    featureItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Removed the alert line
            // alert('Clicked on: ' + item.textContent.trim());
        });
    });
});
