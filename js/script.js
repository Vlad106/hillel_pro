'use strict';

function generateKey(length, characters){
    let result = '';
    for (let i = 0; i < length; i++){
        const indexRandom = Math.floor(Math.random() * characters.length);
        result += characters.charAt(indexRandom);
    }
    return result;
}

const characters = `qwertyuiopasdfghjklzxcvbnm1234567890,./<>*&%$#@!`;
generateKey(11, characters);
console.log(generateKey(11, characters));