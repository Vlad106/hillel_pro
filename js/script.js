'use strict';

function filteredNumbers (arr) {
    const positiveNumbers = [];
    let index = 0; // Create for index in a new array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers[index] = arr[i]; //Don't use .push
            index++; // To put a value in the new array without an empty value in the array
        }
    }
    return positiveNumbers;
}
console.log(filteredNumbers([-1, 2, 3, -1, -2, -3, 1, -3]));