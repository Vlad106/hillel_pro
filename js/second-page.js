'use strict';

const tableBody = document.getElementById('product-table-body');
let products = JSON.parse(localStorage.getItem('products')) || [];

products.sort((a, b) => b.id - a.id);

products.forEach(product => {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>
        <button class="btn btn-sm btn-success me-2" data-id="${product.id}" data-action="edit">Редагувати</button>
        <button class="btn btn-sm btn-danger" data-id="${product.id}" data-action="delete">Видалити</button>
</td>`;

    tableBody.appendChild(row);
});

tableBody.addEventListener('click', (e) => {
    const btn = e.target;

    if (btn.tagName !== 'BUTTON') return null;

    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === 'delete') {
        products = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        location.reload();
    }

    if (action === 'edit') {
        localStorage.setItem('selectedProductId', id);
        window.location.href = 'third-page.html';
    }
});