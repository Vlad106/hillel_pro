'use strict';

const productName = document.getElementById('product-name');
const productDescription = document.getElementById('product-description');
const productPrice = document.getElementById('product-price');
const btnCreate = document.getElementById('create-btn');

btnCreate.addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const allFilled = [...inputs].every(input => input.value.trim() !== '');

    if (!allFilled) {
        console.log('All Filled');
        alert('Please fill all fields.');
        return null;
    }

    const newProduct = {
        id: Date.now(),
        name: productName.value.trim(),
        description: productDescription.value.trim(),
        price: productPrice.value.trim(),
    };

    let products = localStorage.getItem('products');
    products = products ? JSON.parse(products) : [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    inputs.forEach(input => input.value = '');

    window.location.href = 'second-page.html';

    console.log('Товар сохранён:', newProduct);
});