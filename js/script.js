'use strict';

// Apply
Function.prototype.myApply = function(context, argArray) {
    context.tempFunc = this;
    const result = context.tempFunc(...argArray);
    delete context.tempFunc;
    return result;
}

// Test myApply

function sayHello(name) {
    return this.message.replace('___' , name);
}
const user = {message: 'Hello to ___ from JS =)'};
console.log(sayHello.myApply(user, ['Vlad']));

console.log('**********');

// Bind
Function.prototype.myBind = function(context, ...argArray) {
    const original = this;

    return function (...callArgs){
        return original.myApply(context, [...argArray, ...callArgs]);
    }
}

// Test myBind
function sayHi(message , name) {
    return `${message} , ${name}. ${this.mood}`;
}
const user2 = {mood: 'I`m soo tired , wanna be just happy'};
const finalFunc = sayHi.myBind(user2, `'I'm`);
console.log(finalFunc('Vlad'));

console.log('**********');
