document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage
  
    // Function to update the cart display
    function updateCartUI() {
      document.getElementById("cart-count").innerText = cart.length; // Update cart count
    }
  
    // Function to handle "Add to Cart" click
    function addToCart(event) {
      let product = event.target.closest(".product-item"); // Get clicked product
      let name = product.querySelector("h3").innerText;
      let price = product.querySelector("p").innerText.replace("₹", "");
      let image = product.querySelector("img").src;
  
      // Check if item already exists in cart
      let existingItem = cart.find(item => item.name === name);
  
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item is already in cart
      } else {
        let newItem = { name, price, image, quantity: 1 }; // Add new item to cart
        cart.push(newItem);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
      updateCartUI(); // Refresh cart display
    }
  
    // Attach "Add to Cart" event to all buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", addToCart);
    });
  
    updateCartUI(); // Load cart on page load
  });
  