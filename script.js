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

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  //Iterating products array and adding into Product list

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
      // addToCart(product);
    }
  });

  // function addToCart(product) {
  //   cart.push(product);
  //   renderCart();
  // }

  // function renderCart() {
  //   cartItems.innerHTML = "";
  // }
});
