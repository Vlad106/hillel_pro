'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    const result = [];
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            result[index] = array[i];
            index++;
        }
    }
    array.length = 0;
    for (let j = 0; j < result.length; j++) {
        array[j] = result[j];
    }
}
removeElement(array , 2);
console.log(array);