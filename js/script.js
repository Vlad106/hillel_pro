'use strict';

let q = [];
for (let i = 20; i <= 30; i += 0.5) {
    q.push(i);
}
console.log(q.join(`, `)); // Step by step get over all numbers from 20 to 30 , by this step 0.5

const dollar = 27;
for (let i = 10; i <= 100; i += 10){
    let result = dollar * i;
    console.log(result); // Currency recalculation
}

let r = [];
const userNumbers = +prompt('Enter your number 1');
for (let i = 1; i <= 100; i++){
    if (i*i <= userNumbers){
       r.push(i);
    }
}
console.log(r) // The root expression doesn't exceed the original expression

let isPrime = true;
const userNumbers2 = +prompt('Enter your number 2');
for (let i = 2; i <= userNumbers2 - 1; i++){
    if (userNumbers2 % i === 0) {
        isPrime = false;
        break;
    }
        if (isPrime === true){}
}
console.log(`Is number common ? ${isPrime}`); // Check for common number

const userNumbers3 = +prompt('Enter your number 3');
let num = 1;
let result = false;
while (num <= userNumbers3){
    if (num === userNumbers3){
        result = true;
        break;
    }
num *= 3;
}
console.log(`Can reach the number by raising 3 to power ? ${result}`); // Can achieve the number use degrees of 3

const userNumbers4 = +prompt('Enter your number 4'); // Additional task
let result2 = false;
let power = 0;
let num2 = 1;
while (num2 <= userNumbers4){
    if (num2 === userNumbers4){
        result2 = true;
        break;
    }
    num2 *=2;
    power++;
}
console.log(`Can 2 be raised to reach your number? ${result2}. How many powers of 2 are need to have your number? ${power}`);