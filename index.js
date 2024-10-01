// Add JavaScript below
document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.getElementById('products');

    const products = [
        { id: 1, name: 'Product 1', price: 10.00 },
        { id: 2, name: 'Product 2', price: 20.00 },
        { id: 3, name: 'Product 3', price: 30.00 },
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
});
