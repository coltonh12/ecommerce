// Add JavaScript below
document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.getElementById('products');
    const cart = [];

    const products = [
        { id: 1, name: 'Product 1', price: 10.00, image: 'product1.jpg', description: 'Black Hoodie' },
        { id: 2, name: 'Product 2', price: 20.00, image: 'product2.jpg', description: 'White t-shirt' },
        { id: 3, name: 'Product 3', price: 30.00, image: 'product3.jpg', description: 'jordan 4' },
        { id: 4, name: 'Product 4', price: 460.00, image: 'product4.jpg',description: 'chrome heart'},
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="showDetails(${product.id})">View Details</button>
        `;
        productsSection.appendChild(productDiv);
    });

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
    };

    window.showDetails = function(productId) {
        const product = products.find(p => p.id === productId);
        const modal = document.getElementById('productModal');
        modal.querySelector('.modal-content').innerHTML = `
            <span class="close">×</span>
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        modal.style.display = 'block';

        modal.querySelector('.close').onclick = function() {
            modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    };
});
