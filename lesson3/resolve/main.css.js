// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//

let x = 100;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = 0;
if (x === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 33;
if (time >= 0 && time <= 14) {
    console.log('first quarter');
} else if (time >= 15 && time <= 29) {
    console.log('second quarter');
} else if (time >= 30 && time <= 44) {
    console.log('third quarter');
} else if (time >= 45 && time <= 59) {
    console.log('fourth quarter');
} else {
    console.log('entered incorrectly');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

let day = 25;
if (day >= 1 && day <= 10) {
    console.log('the first ten-day period');
} else if (day >= 11 && day <= 20) {
    console.log('the second ten-day period');
} else if (day >= 21 && day <= 31) {
    console.log('the third ten-day period');
} else {
    console.log('entered incorrectly');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

let weekday = '1';
switch (weekday) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('entered incorrectly')
}

//  - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

let a = 88;
let b = 77;
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a === b) {
    console.log('Введені числа рівні');
} else {
    console.log('entered incorrectly');
}

//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xtwo = 0 || "default";
console.log(xtwo)
