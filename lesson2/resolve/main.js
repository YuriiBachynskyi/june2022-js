// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let str1 = 'one';
let str2 = 'two';
let str3 = 'three';
let srt4 = 'four';
let str5 = 'five';

let together =  [a, b, c, d, e, str1, str2, str3, srt4, str5];
console.log(together) ;

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The History Of Starbucks',
    pageCount: 408,
    genre: 'management'
}
console.log(book1);

let book2 = {
    title:'The Churchill factor',
    pageCount: 400,
    genre: 'biography'
}
console.log(book2);

let book3 = {
    title:'Toyota philosophy',
    pageCount: 424,
    genre: 'success stories'
}
console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: 'The History Of Starbucks',
    pageCount: 408,
    genre: 'management',
    authors: [
        {name: 'Howard Schultz',age: 69}
    ]
}
console.log(book4);

let book5 = {
    title: 'The Churchill factor',
    pageCount: 400,
    genre: 'biography',
    authors: [
        {name: 'Boris Johnson',age: 58}
    ]
}
console.log(book5);

let book6 = {
    title: 'Toyota philosophy',
    pageCount: 424,
    genre: 'success stories',
    authors: [
        {name: 'Jeffrey Liker',age: 72}
    ]
}
console.log(book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user1 = {
    name: 'user1',
    username: 'username1',
    password: 1
};

let user2 = {
    name: 'user2',
    username: 'username2',
    password: 12
};

let user3 = {
    name: 'user3',
    username: 'username3',
    password: 123
};

let user4 = {
    name: 'user4',
    username: 'username4',
    password: 1234
};

let user5 = {
    name: 'user5',
    username: 'username5',
    password: 12345
};

let user6 = {
    name: 'user6',
    username: 'username6',
    password: 123456
};

let user7 = {
    name: 'user7',
    username: 'username7',
    password: 1234567
};

let user8 = {
    name: 'user8',
    username: 'username8',
    password: 12345678
};

let user9 = {
    name: 'user9',
    username: 'username9',
    password: 123456789
};

let user10 = {
    name: 'user10',
    username: 'username10',
    password: 1234567890
};

let user = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(user);
console.log(user1['password']);
console.log(user2['password']);
console.log(user3['password']);
console.log(user4['password']);
console.log(user5['password']);
console.log(user6['password']);
console.log(user7['password']);
console.log(user8['password']);
console.log(user9['password']);
console.log(user10['password']);