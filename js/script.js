'use strict';

let j = [];
for (let i =10; i<=20; i++) {
    j.push(i);
}
console.log(j.join(', ')); // List the numbers from 10 to 20 by commas

let q =[];
for (let i =10; i <= 20; i++) {
    q.push(i);
    for (let w = 0; w < q.length; w++) {
        console.log(q[w]**2); // Squared the values from 10 to 20
    }
}

let w = [];
for (let i = 0; i <= 10 ; i++) {
    let j = i*7;
    w.push(j);
}
console.log(w.join(`, `)); // Multiplication by 7

let sum = 0;
for (let i =1; i <= 15; i++){
    sum += i;
}
console.log(sum); // The sum of numbers from 1 to 15

let get = 1;
for (let i = 15; i <= 35; i++){
    get *= i;
}
console.log(get); // Product all numbers from 15 to 35

let sum2 = 0;
for (let i = 1; i <= 500; i++){
    sum2 += i;
}
let avr = sum2 / 500 ;
console.log(avr); // Counted the average values of numbers from 1 to 500

let sum3 = 0;
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0)
        sum3 += i;
}
console.log(sum3); // The sum of paired numbers from 30 to 80

let str = [];
for (let i = 100; i <= 200; i++){
    if (i % 3 === 0)
        str.push(i);
}
console.log(str.join(', ')); // Numbers from 100 to 200 which are multiples of 3

let sum4 = 0;
let divisor = [];
const numbers = +prompt(`Add the number`);
for (let i = 1; i <= numbers; i++){
    if (numbers % i === 0) {
        alert(i);
        console.log(`Paired dividers ${i}`);
        if (i % 2 === 0) {
            divisor.push(i);
            sum4 += i;
        }
    }
}
console.log(`Number of dividers ${divisor.length}`);
console.log(`Sum of paired dividers ${sum4}`); // Made function to find all devisors and sum of paired devisors

let num1 = 0;
let product = 0;
for (let i = 1; i <= 10; i++){
    product = i;
    for (let j = 1; j <= 10; j++) {
        num1 = j;
        let result = num1 * product;
        console.log(result) // Multiplication table up to 10
    }
}