// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arr = [];
// let user1 = new User(1, 'vasya', 'pupkin1', '1@@@@@@@@@@', +169855512584);
// let user2 = new User(5, 'petya', 'pupkin2', '2@@@@@@@@@@', +269855512584);
// let user3 = new User(3, 'yura', 'pupkin3', '3@@@@@@@@@@', +369855512584);
// let user4 = new User(25, 'kolya', 'pupkin4', '4@@@@@@@@@@', +469855512584);
// let user5 = new User(7, 'vanya', 'pupkin5', '5@@@@@@@@@@', +569855512584);
// let user6 = new User(78, 'igor', 'pupkin6', '6@@@@@@@@@@', +669855512584);
// let user7 = new User(29, 'stepan', 'pupkin7', '7@@@@@@@@@@', +769855512584);
// let user8 = new User(41, 'vitalii', 'pupkin8', '7@@@@@@@@@@', +869855512584);
// let user9 = new User(38, 'ostap', 'pupkin9', '8@@@@@@@@@@', +969855512584);
// let user10 = new User(17, 'nazar', 'pupkin10', '9@@@@@@@@@@', +1069855512584);


// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(arr);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

// let filter = arr.filter(value => value.id % 2 === 0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// let sort = arr.sort((a, b) => a.id - b.id);
// console.log(sort);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arr = [];
// let user1 = new Client(1, 'vasya', 'pupkin1', '1@@@@@@@@@@', +169855512584,[1,2,3]);
// let user2 = new Client(5, 'petya', 'pupkin2', '2@@@@@@@@@@', +269855512584,[1]);
// let user3 = new Client(3, 'yura', 'pupkin3', '3@@@@@@@@@@', +369855512584,[23,4]);
// let user4 = new Client(25, 'kolya', 'pupkin4', '4@@@@@@@@@@', +469855512584,[1,2,3,4,5]);
// let user5 = new Client(7, 'vanya', 'pupkin5', '5@@@@@@@@@@', +569855512584,[1,2,3,4,55,6,7,7]);
// let user6 = new Client(78, 'igor', 'pupkin6', '6@@@@@@@@@@', +669855512584,[2,6,7]);
// let user7 = new Client(29, 'stepan', 'pupkin7', '7@@@@@@@@@@', +769855512584,[5,6]);
// let user8 = new Client(41, 'vitalii', 'pupkin8', '7@@@@@@@@@@', +869855512584,[2,3,4,5]);
// let user9 = new Client(38, 'ostap', 'pupkin9', '8@@@@@@@@@@', +969855512584,[1,2,34,5,6,7,8,]);
// let user10 = new Client(17, 'nazar', 'pupkin10', '9@@@@@@@@@@', +1069855512584,[7,7,7]);
//
//
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sort = arr.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


// function Car(model, producer, graduationYear, maximumSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.graduationYear = graduationYear;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    // this.drive = function () {
    //     console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    // }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    // this.info = function () {
    //     for (const carKey in this) {
    //         if (typeof this[carKey] !== `function`) {
    //             console.log(`${carKey} - ${this[carKey]}`);
    //         }
    //     }
    // }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
   // this.increaseMaxSpeed = function (newSpeed) {
   //     this.maximumSpeed += newSpeed;
   //
   // }
       // - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//
//     };
//
// }
//
// let car = new Car('Skoda', 'the Czech Republic', 2016, 260, 1.6);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// console.log(car);
// car.addDriver({name:'vasya', age: 22});
// console.log(car);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

// class Car{
//     constructor(model, producer, graduationYear, maximumSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.graduationYear = graduationYear;
//         this.maximumSpeed = maximumSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
//     }
//
//     info(){
//         for (const carKey in this) {
//             if (typeof this[carKey] !== `function`) {
//                 console.log(`${carKey} - ${this[carKey]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.maximumSpeed = this.maximumSpeed + newSpeed;
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// let car = new Car('Skoda', 'the Czech Republic', 2016, 260, 1.6);
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100
// );
// console.log(car);
// car.addDriver({name:'petro', age: 33});
// console.log(car);







//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Cinderella {
//
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//
// let cinderella1= new Cinderella('Natalya', 29, 40);
// let cinderella2 = new Cinderella('Natalya', 29, 38);
// let cinderella3 = new Cinderella('Natalya', 29, 39);
// let cinderella4 = new Cinderella('Natalya', 29, 36);
// let cinderella5 = new Cinderella('Natalya', 29, 34);
//
// let array = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5];
//
//
// class Prince extends Cinderella{
//     constructor(name,age,findFootSize) {
//         super(name, age);
//         this.findFootsize = findFootSize;
//
//     }
//
// }
//
// let prince = new Prince('vasya', 22, 37);
//
// let find = (arr, prince) => {
//     for (const item of arr) {
//         if (prince.findFootSize === item.footSize) {
//             return `My Cinderella is ${item.name}`
//         }
//     }
// }
//
// console.log(find(array, prince));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// let cinderella = array.find(value => prince.findFootsize = value.footsize);
// console.log(cinderella);


