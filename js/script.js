'use strict';

const button = document.getElementById('toggle-theme');
button.addEventListener('click', function (){
    document.body.classList.toggle('dark');
});