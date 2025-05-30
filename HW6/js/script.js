'use strict'

const name = 'Vladyslav'; //тип данных String - для текстовых строк, можно выводить текстовые данные и значения
const age = 20; //тип данных Number - для чисел, можно выводить числовые данные , есть ограниченные значения (64-бит)
let verified = true; //тип данных Boolean - для логических значений, для подтверждения действий , используется true или false

//  const registrationData = {  //тип данных Object - для объектов, для хранения данных которые занимают больший обьем памяти , используется для более динамических и сложных действий
//     month: 6,
//     day: 10,
//     year: 2004,
// }
// console.log(registrationData.day, registrationData.month, registrationData.year)

let cardNumber = BigInt(12345678901234567890); //тип данных BigInt - для больших целых чисел, для хранения больших чисел , используется для работы с координатами и более сложными вычислениями
let promoCode = null; //тип данных Null - для пустых значений, используется для дальнейшего заполнения
let secondName; //тип данных Undefined - для неопределенных значений(пустое значение), зачастую принято не использовать
let bonusAccount = 13;

console.log(`Користувач ${name} , вік ${age} , верифікація: ${verified}.`)

let registerDate = new Date(2004, 5, 10);
console.log(registerDate)

console.log(typeof name, typeof age, typeof verified, typeof cardNumber, typeof promoCode, typeof secondName, typeof bonusAccount)