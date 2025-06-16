'use strict';

function greetUser(name = prompt(`Enter your name`)){
    return alert(`Hello , ${name}!`);
}
greetUser(); // Ask the username and then show a message at the user screen