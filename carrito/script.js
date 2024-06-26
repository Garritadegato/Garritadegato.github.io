// Función para agregar un producto al carrito
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} ha sido agregado al carrito`);
}

// Función para mostrar los productos en el carrito
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    let totalPrice = 0;

    cartItemsDiv.innerHTML = '';
    
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <h2>${item.name}</h2>
            <p>Precio: $${item.price}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsDiv.appendChild(div);
        totalPrice += item.price;
    });

    totalPriceSpan.innerText = totalPrice.toFixed(2);
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

// Función para simular la compra de productos
function purchaseItems() {
    if (confirm('¿Deseas comprar estos productos?')) {
        localStorage.removeItem('cart');
        alert('Compra realizada con éxito');
        displayCartItems();
    }
}

// Si estamos en la página del carrito, mostramos los productos
if (document.getElementById('cart-items')) {
    displayCartItems();
}

document.getElementById('compraForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Aquí puedes agregar código para guardar los datos del formulario si es necesario

    alert('Su compra fue realizada con éxito. Se entrega el 3 de octubre.');
});


