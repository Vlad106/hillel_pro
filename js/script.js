'use strict';

const birthdayStr = prompt('Year of your birth, by this way YYYY');
let ageMessage = ``;
if (birthdayStr === null){
    alert(`Шкода , що не вказали ваш рік народження.`)
}else {
    const birthday = +birthdayStr;
    const date = new Date().getFullYear();
    let age = date - birthday;
    ageMessage = `Ваш вік ${age}` ;
}

const city = prompt(`What is your city?`);
let cityMessage = ``;
if (city === null) {
    alert(`Шкода , що не захотіли вказати ваше місто.`);
}else if (city === `Київ`) {
    cityMessage = `Ти живеш у столиці України.` ;
} else if (city === `Лондон`) {
    cityMessage = `Ти живеш у столиці Великої Британії` ;
} else if (city === `Вашингтон`) {
    cityMessage = `Ти живеш у столиці Америки` ;
} else {
    cityMessage = `Ти живеш у місті ${city}` ;
}

const act = prompt(`What is your favourite sport?`)
let actMessage = ``;
if (act === null) {
    alert(`Шкода, що Ви не захотіли ввести спорт який полюбляєте.`);
} else if (act === `Футбол`) {
    actMessage = `Круто! Хочеш бути як Пеле?` ;
} else if (act === `Баскетбол`) {
    actMessage = `Круто! Хочеш бути як Стефан Карі ?` ;
} else if (act === `Бокс`) {
    actMessage = `Круто! Хочеш бути як Олександр Усик?` ;
} else {
    actMessage = `Круто! Твій спорт ${act}` ;
}

alert(`${ageMessage}\n${cityMessage}\n${actMessage}`);

