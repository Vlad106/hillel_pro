'use strict';

const nameInput = document.getElementById('product-name');
const descInput = document.getElementById('product-description');
const priceInput = document.getElementById('product-price');
const saveBtn = document.getElementById('save-btn');

const selectedId = Number(localStorage.getItem('selectedProductId'));
let products = JSON.parse(localStorage.getItem('products')) || [];

const product = products.find(p => p.id === selectedId);

if (!product) {
    alert('Product not found!');
    window.location.href = 'second-page.html';
}

nameInput.value = product.name;
descInput.value = product.description;
priceInput.value = product.price;

saveBtn.addEventListener('click', (e) => {
    if (
        nameInput.value.trim() === '' ||
        descInput.value.trim() === '' ||
        priceInput.value.trim() === ''
    ) {
        alert('Please enter all fields');
        return null;
    }

    product.name = nameInput.value.trim();
    product.description = descInput.value.trim();
    product.price = priceInput.value;

    localStorage.setItem('products', JSON.stringify(products));
    localStorage.removeItem('selectedProductId');
    window.location.href = 'second-page.html';
})