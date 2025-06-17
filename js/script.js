'use strict';

function padString (str, num, symbol, left = false) {
    if (typeof str !== 'string') throw new Error('String should be a string');
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
        throw new Error('Number should be a number');
    }
    if(num === 0) return str;
    if (typeof symbol !== 'string' ||  symbol.length !== 1) {
        throw new Error('Symbol should be a string');
    }
    if (typeof left !== 'boolean') throw new Error(`Left should be a boolean`);

    if (num < str.length) {
        return str.substring(0, num);
    }
    const symbols = num - str.length;
    const addSymbols = symbol.repeat(symbols);

    if (left){
        return addSymbols + str;
    } else {
        return str + addSymbols;
    }
}

console.log(padString(`hiphop` , 10 , '-'));
console.log(padString(`hiphop` , 10 , '-' , true));
console.log(padString(`hiphop` , 3 , '-'));