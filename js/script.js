'use strict';

function creatShift(array){
    if (array.length === 0){
        return undefined;
    }
    const firstEl = array[0];
    for (let i = 0; i < array.length - 1; i++){
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    return firstEl;
}

const arr = [1 ,1 ,1 ,1, 2, 2, 2 ];
console.log(creatShift(arr));
console.log(arr);

console.log('=========');

function creatReverse(array){
    for (let i = 0; i < array.length/2; i++){
        let save = array[i];
        array[i] = array[array.length - 1 -i];
        array[array.length - 1 -i] = save;
    }
    return array;
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(creatReverse(arr2));

console.log('=========');
