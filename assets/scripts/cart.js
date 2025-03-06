const quantityValue = document.querySelector(".quantity");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const addBtn = document.querySelector(".actions-cta");
const cartBody = document.querySelector(".cart-body");
const cartCheckout = document.querySelector(".cart-checkout");

let quantity = 0;
let cartIndex = 0;
let standardPrice = 125;

function updateQuantity() {
  if (this.classList.contains("minus")) {
    quantity = Math.max(0, quantity - 1);
  } else {
    quantity = quantity >= 5 ? 5 : quantity + 1;
  }

  quantityValue.textContent = quantity;
}

function emptyCart() {
  cartBody.classList.add("empty");
  cartBody.innerHTML = `<p>Your cart is empty</p>`;

  quantity = 0;
  quantityValue.textContent = quantity;
}

function updateCart() {
  if (quantity == 0) {
    emptyCart();
  } else {
    cartBody.classList.remove("empty");
    cartBody.innerHTML = `
        <div class="cart-item">
            <img
              src="./assets/images/image-product-1-thumbnail.jpg"
              alt="Product Thumbnail"
              class="cart-thumbnail"
            />
            <div class="cart-details">
              <p class="cart-name">Fall Limited Edition Sneakers</p>
              <div class="cart-price">
                <p class="standard-price">$125.00 x</p>
                <p class="cart-quantity">${quantity}</p>
                <p class="total-price">$${(standardPrice * quantity).toFixed(
                  2
                )}</p>
              </div>
            </div>
            <div class="cart-actions">
              <button class="cart-remove">
                <img
                  src="./assets/images/icon-delete.svg"
                  alt="Delete Icon"
                  class="cart-delete"
                />
              </button>
            </div>
          </div>
          <div class="cart-checkout">
            <button class="button-checkout btn">Checkout</button>
          </div>
    `;
    const removeBtn = document.querySelector(".cart-remove");
    removeBtn.addEventListener("click", emptyCart);
  }
}

updateCart();

minusBtn.addEventListener("click", updateQuantity);
plusBtn.addEventListener("click", updateQuantity);
addBtn.addEventListener("click", updateCart);
