document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
document.querySelectorAll('.feature-item').forEach(item => {
  item.addEventListener('click', () => {
    window.location.href = 'your_target_url'; // Replace with your target URL
  });
});
