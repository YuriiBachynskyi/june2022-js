// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let music = [];
music[0] = 1;
music[1] = 'qwe';
music[2] = true;
music[3] = 36.4;
music[4] = 'yyyy';
music[5] = [1, 'dsda', false];
music[6] = 100;
music[7] = 9999;
music[8] = {name: 'Yura', age: 32};
music[9] = [1, 'qweqwe', {name: 'Natalia', age: 29}];
console.log(music)
console.log(music[0]);
console.log(music[1]);
console.log(music[2]);
console.log(music[3]);
console.log(music[4]);
console.log(music[5]);
console.log(music[6]);
console.log(music[7]);
console.log(music[8]);
console.log(music[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: 'The History Of Starbucks',
    pageCount: 408,
    genre: 'management'
}
console.log(book1);

const book2 = {
    title: 'The Churchill factor',
    pageCount: 400,
    genre: 'biography'
}
console.log(book2);

const book3 = {
    title: 'Toyota philosophy',
    pageCount: 424,
    genre: 'success stories'
}
console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

const book4 = {
    title: 'The History Of Starbucks',
    pageCount: 408,
    genre: 'management',
    authors: [
        {name: 'Howard Schultz', age: 69}
    ]
}
console.log(book4);

const book5 = {
    title: 'The Churchill factor',
    pageCount: 400,
    genre: 'biography',
    authors: [
        {name: 'Boris Johnson', age: 58}
    ]
}
console.log(book5);

const book6 = {
    title: 'Toyota philosophy',
    pageCount: 424,
    genre: 'success stories',
    authors: [
        {name: 'Jeffrey Liker', age: 72}
    ]
}
console.log(book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name:'Yura1', username:'Yura911', password:1},
    {name:'Yura2', username:'Yura911', password:12},
    {name:'Yura3', username:'Yura911', password:123},
    {name:'Yura4', username:'Yura911', password:1234},
    {name:'Yura5', username:'Yura911', password:12345},
    {name:'Yura6', username:'Yura911', password:123456},
    {name:'Yura7', username:'Yura911', password:1234567},
    {name:'Yura8', username:'Yura911', password:12345678},
    {name:'Yura9', username:'Yura911', password:123456789},
    {name:'Yura10', username:'Yura911', password:1234567891},
    {name:'Yura11', username:'Yura911', password:12345678912},
]
console.log(user)
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
console.log(user[10].password);
