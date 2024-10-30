document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 29.99,
    },
    {
      id: 2,
      name: "Gucci Bags",
      price: 99.99,
    },

    {
      id: 3,
      name: "Sun Glasses",
      price: 19.99,
    },
  ];

  let cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  //Iterating Products Array and Adding into Product List

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span> ${product.name} - $${product.price} </span>
    <button data-id = ${product.id}> Add to cart </button>
    `;
    productList.appendChild(productDiv);
  });

  // Adding Event Listener to Button within Product List
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  //Function to Add Product into Cart
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  //Function to Render Cart Elements
  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("product");
        cartItem.innerHTML = `
        <span> ${item.name} - $${item.price} </span>`;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCart.classList.remove("hidden");
      cartTotal.classList.add("hidden");
    }
  }

  // Adding Event Listener to CheckOut Button
  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    renderCart();
  });
});
