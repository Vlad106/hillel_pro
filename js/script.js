'use strict';

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const saveArr = [...arr];
let sum = 0;
let positiveNum = 0;
let minWIndex = 0;
let maxWIndex = 0;
let negativeNum = 0;
let evenNum = 0;
let oddNum = 0;
let evenSum = 0;
let oddSum = 0;
let derPosNum = BigInt(1);

for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
        sum += arr[i];
        positiveNum++;
        derPosNum *= BigInt(arr[i]);
    }

    if (arr[i] < arr[minWIndex]){
        minWIndex = i;
    }

    if (arr[i] > arr[maxWIndex]){
        maxWIndex = i;
    }

    if (arr[i] < 0){
        negativeNum++;
    }

    if (arr[i] % 2 === 0 && arr[i] > 0){
        evenNum++;
        evenSum += arr[i];
    }

    if (arr[i] % 2 !== 0 && arr[i] > 0) {
        oddNum++;
        oddSum +=arr[i];
    }
}
for (let j = 0; j < saveArr.length; j++){
    if (saveArr[j] !== saveArr[maxWIndex]){
        saveArr[j] = 0;
    }
}

console.log(`Сума позитивних елементів: ${sum}`);
console.log(`Кількість позитивних елементів: ${positiveNum}`);
console.log(`Мінімальний елемент: ${arr[minWIndex]} (індекс: ${minWIndex})`);
console.log(`Максимальний елемент: ${arr[maxWIndex]} (індекс: ${maxWIndex})`);
console.log(`Кількість негативних елементів: ${negativeNum}`);
console.log(`Кількість парних позитивних: ${evenNum}`);
console.log(`Сума парних позитивних: ${evenSum}`);
console.log(`Кількість непарних позитивних: ${oddNum}`);
console.log(`Сума непарних позитивних: ${oddSum}`);
console.log(`Добуток всіх позитивних: ${derPosNum}`);
console.log(saveArr);


