'use strict'

const name = prompt('Your name?');
const age = Number(prompt('Your age?'));
let agreement = confirm('Are you agree?');
if (agreement)
    (alert('Your status: confirmed'));
else
    (alert ('Your status: rejected'));


{
    alert(`Hello, ${name}! You are ${age}!`);
}

const userId = BigInt(prompt('Your id?')) ;
const bonusCode = null;
let secondName;


console.log("name:", name, typeof name );
console.log("age:", age, typeof age);
console.log("agreement:", agreement, typeof agreement);
console.log("userId:", userId, typeof userId);
console.log("bonusCode:", bonusCode, typeof bonusCode);
console.log("secondName:", secondName, typeof secondName);

