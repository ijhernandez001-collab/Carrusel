// Seleccionamos elementos del DOM
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = []; // Array que almacena los productos en el carrito

// Función para actualizar el carrito en el DOM
function updateCart() {
  cartItems.innerHTML = ''; // Limpiar lista

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      ${item.name} - $${item.price.toLocaleString()} MXN
      <button class="btn btn-sm btn-danger">X</button>
    `;

    // Botón para eliminar producto
    li.querySelector('button').addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });

    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toLocaleString();
}

// Agregar productos al carrito al hacer click
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));

    cart.push({ name, price });
    updateCart();
  });
});
