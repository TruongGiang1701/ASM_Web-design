function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTableBody = document.querySelector(".cart-table tbody");
  cartTableBody.innerHTML = ""; 

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const row = `
            <tr>
              <td class="product-name">${item.name}</td>
              <td class="quantity">
                <input 
                  type="number" 
                  value="${item.quantity}" 
                  min="1" 
                  onchange="updateQuantity(${index}, this.value)"
                />
              </td>
              <td class="price">${item.price.toLocaleString()} VND</td>
              <td class="total">${itemTotal.toLocaleString()} VND</td>
              <td class="actions">
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
              </td>
            </tr>
          `;
    cartTableBody.innerHTML += row;
  });

  document.querySelector(
    ".cart-summary p strong"
  ).textContent = `Total: ${total.toLocaleString()} VND`;
}

function updateQuantity(index, quantity) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
window.onload = loadCart;

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const paymentData = {
      fullName: document.getElementById("full-name").value,
      phone: document.getElementById("phone").value,
      deliveryMethod: document.getElementById("delivery-method").value,
      deliveryTime: document.getElementById("delivery-time").value,
      message: document.getElementById("message").value,
      district: document.getElementById("district").value,
      ward: document.getElementById("ward").value,
      address: document.getElementById("address").value,
      branch: document.getElementById("branch").value,
      notes: document.getElementById("notes").value,
    };

    localStorage.setItem("paymentData", JSON.stringify(paymentData));
    alert("Order submitted successfully!");
  });
  document.getElementById("proceed-checkout-btn").addEventListener("click", function () {
    const paymentInfo = document.querySelector(".payment-info");
    paymentInfo.classList.remove("hidden");
  });
  function toggleSearch() {
    var searchContainer = document.getElementById("search-container");
    if (
      searchContainer.style.display === "none" ||
      searchContainer.style.display === ""
    ) {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  }
  
