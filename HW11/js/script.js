'use strict'

const name = prompt('Your name?');
const age = Number(prompt('Your age?'));
let notifications = confirm('Do you want to receive notifications?');
let userId = BigInt(1234567899876543210n);
let lastLogin = null;
let nickname;

alert(`Привіт, ${name}! Ваш ID: ${userId}`);

const session = {
    name: name,
    age: age,
    notifications: notifications,
    userId: userId,
    nickname: nickname,
    lastLogin: lastLogin,
    favoriteTech: ['HTML', 'CSS', 'JS'],

    settings: {
        theme: `dark`,
        autoLogin: false,
    }
}

console.log(session);
console.log(typeof session.name, typeof session.age, typeof session.notifications, typeof session.userId, typeof session.nickname, typeof session.lastLogin, typeof session.favoriteTech, typeof session.settings)