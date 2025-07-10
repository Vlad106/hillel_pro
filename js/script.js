'use strict';


document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('filter');
    const cards = document.querySelectorAll('.card');

    select.addEventListener('change', function (event){
        const selectedCategory = event.target.value;

        cards.forEach(card => {
            if (selectedCategory === 'all') {
                card.style.display = 'block';
            }
            else if (card.dataset.category === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


