// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars (model, manufacturer, year, maxSpeed, volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`);
//         }
//
//         // console.log(`модель - ${this.model}, виробник -  ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна -${this.volume}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let carN = new Cars ('passat', 'VW', 2010, 160, 2.0, );
// console.log(carN);
// carN.drive();
// carN.info();
// carN.increaseMaxSpeed(30);
// carN.changeYear(2011);
// carN.addDriver('vasil');
// console.log(carN);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 class Car {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info () {
        for (const key of this) {
            console.log(`${key} - ${this[key]}`);
        }
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    changeYear (newValue) {
        this.year = newValue;
    };
    addDriver (driver) {
        this.driver = driver;
    };
}
let carD = new Car ('passat', 'VW', 2010, 160, 2.0, );
console.log(carD);
carD.drive();
carD.info();
carD.increaseMaxSpeed(30);
carD.changeYear(2011);
carD.addDriver('vasil');
console.log(carD);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let cinderellas = [
//     new Cinderella ('cinderella1', 19, 35),
//     new Cinderella ('cinderella2', 18, 32),
//     new Cinderella ('cinderella3', 20, 33),
//     new Cinderella ('cinderella4', 19, 34),
//     new Cinderella ('cinderella5', 19, 36),
//     new Cinderella ('cinderella6', 18, 37),
//     new Cinderella ('cinderella7', 19, 38),
//     new Cinderella ('cinderella8', 18, 38),
//     new Cinderella ('cinderella9', 19, 39),
//     new Cinderella ('cinderella10', 18, 38),
// ]
// console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
// }
// let prince = new Prince ('Prince', 20, 34);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let pairNew = (cinderellas, prince) => {
//     for (const item of cinderellas) {
//         if (item.size === prince.slipper) {
//             return `tvoya cinderella ${item.name}`;
//         }
//     }
// }
// console.log(pairNew(cinderellas, prince))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let cinderella = cinderellas.find(value => value.size === prince.slipper);
// console.log(cinderella);

