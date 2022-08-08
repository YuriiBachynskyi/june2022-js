// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і

// function foo(a,b) {
//     return a*b;
// }
// console.log(foo(10, 20));
// Або через стрілочний тип
// const foo = (a, b) => a * b;
// console.log(foo(10, 20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let Pi = 3.14;
// function foo(Pi,r) {
//     return Pi * r * r;
// }
// console.log(foo(Pi, 10));
//
// Або через стрілочний тип

// let Pi = 3.14;
// const foo = (Pi, r) => Pi * r * r;
// console.log(foo(Pi, 10));


// Або через оператор Math

// let Pi = 3.14;
// function foo(Pi, r) {
//     return Pi * Math.pow(r, 2);
// }
// console.log(foo(Pi, 10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let Pi = 3.14;
// function foo(Pi, r, h) {
//     return 2 * Pi * r * (h * r);
// }
// console.log(foo( Pi, 10, 50));


// - створити функцію яка приймає масив та виводить кожен його елемент


// let array = [1, 2, 3, 4];
//
// function foo(array) {
//     console.log(array);
// }
// foo(array);
//
// Або проітурувати кожен елемент масиву

// let arrey = [1, 2, 3, 4,];
// function foo(arrey) {
//     for (const arreyElement of arrey) {
//         console.log(arreyElement);
//     }
// }
// foo(arrey);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foo(text) {
//     document.write(`<p>${text}</p>`);
// }
// foo('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo(text) {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// foo('text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo(text, count) {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//      document.write(`<lI>${text}</lI>`)
//     }
//     document.write(`</ul>`)
// }
//
// foo('text', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1, 'hello', true];
//
// function foo(array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo(array);



// - Cтворити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let arrey = [
//     {
//         id: 1,
//         name:'Vasya',
//         age:22
//     },
//     {
//         id: 2,
//         name:'Sasha',
//         age:23
//     },
//     {
//         id: 3,
//         name:'Petya',
//         age:24
//     },
// ];
// function foo(arrey) {
//     for (const arreyElement of arrey) {
//         document.write(`<div>${arreyElement.id}  ${arreyElement.name}  ${arreyElement.age}</div>`)
//     }
// }
// foo(arrey);


// - створити функцію яка повертає найменьше число з масиву


// let arrey = [1, 2, 3, 4, -5];
//
// function foo(arrey) {
//     let min = arrey[0];
//     for (const minElement of arrey) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
// foo(arrey);
// console.log(foo(arrey));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrey = [1, 2, 3, 4];
//
// function foo(arrey) {
//     let sum = 0;
//     for (const arreyElement of arrey) {
//         sum += arreyElement;
//     }
//     return sum;
// }
//
// console.log(foo(arrey));