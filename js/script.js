'use strict';

function avrNumbers (arr){
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            sum += arr[i];
            count++;
        }
    }
    return sum/count;
}
const mixedArray = [12, `hello`, `world`, 4, 1, null, 100];
const result = avrNumbers(mixedArray);
console.log(result); // Function that calculates the average value of only numbers

console.log('=======');

function doMath(x, symbol, y){
    function power(x, y){
        let result = 1;
        for (let i =0; i < y; i++){
            result *= x;
        }
        return result;
    }
    switch (symbol){
        case '+':
            return x + y;
            case '-':
                return x - y;
                case '*':
                    return x * y;
        case '/':
            return x / y;
            case '%':
                return x % y;
        case '^':
            return power(x , y);
        default:
            return 'Unknown operation';
    }
}
const x = +prompt('Enter first number');
const y = +prompt('Enter second number');
const symbol = prompt('Enter symbol (+ , - , * , / , % , ^)');
console.log (doMath(x, symbol, y));
console.log('symbol =', `"${symbol}"`); // Made calculate function

console.log('=======');

function createArrays () {
    const rows = +prompt(`Enter the number of rows`);
    const cols = +prompt(`Enter the number of cols`);
    const doubleArray = [];
    for (let i = 0; i < rows; i++) {
        doubleArray[i] = [];

        for (let j = 0; j < cols; j++) {
            doubleArray[i][j] = prompt(`Enter values for [${i}][${j}]`)
        }
    }
    return doubleArray;
}
const result3 = createArrays();
console.log(result3);

console.log('=======');

function deleteElements (str , elements){
   let result4 = '';
   for (let i = 0; i < str.length; i++) {
       let currentElement = str[i];
       let remove = false;

       for (let j = 0; j < elements.length; j++) {
           if (currentElement === elements[j]) {
               remove = true;
               break;
           }
       }
       if (!remove) {
           result4 += currentElement;
       }
   }
   return result4;
}
console.log(deleteElements(`hello sweetheart` , ['h', 'e', 'a', 'r', 't']));