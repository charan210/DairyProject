
    function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.add-to-cart');

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const productPrice = productCard.querySelector('.price').textContent;

      // Example: Add product details to localStorage or update cart UI
      console.log(`Added to cart: ${productName} - ${productPrice}`);
      // Implement actual cart logic here
    });
  });
});


 