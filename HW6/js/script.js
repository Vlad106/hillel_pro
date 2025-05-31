'use strict'

const name = 'Vladyslav'; //data type String - for text lines, can show text data and text values
const age = 20; //data type Number - for numbers, can show numbers values , has limited value (64-bit)
let verified = true; //data type Boolean - for logical values, for approve acts , use true or false

//  const registrationData = {  //data Object - for objects, for saving data that takes up more memory , use for more dynamic and complex acts
//     month: 6,
//     day: 10,
//     year: 2004,
// }
// console.log(registrationData.day, registrationData.month, registrationData.year)

let cardNumber = BigInt(12345678901234567890); //data type BigInt - for big numbers, for saving big numbers , use for working with coordinate and complex calculations
let promoCode = null; //data type Null - for empty elements, use for further filling with an element
let secondName; //data type Undefined - for undefined values ( empty element ) , often don't use
let bonusAccount = 13;

console.log(`Користувач ${name} , вік ${age} , верифікація: ${verified}.`)

let registerDate = new Date(2004, 5, 10);
console.log(registerDate)

console.log(typeof name, typeof age, typeof verified, typeof cardNumber, typeof promoCode, typeof secondName, typeof bonusAccount)