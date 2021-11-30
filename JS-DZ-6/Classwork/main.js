// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let n4 = 'Albus..---__Dambuldor';
//
function normalname (name) {
    name.replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
console.log(normalname(n1));
    return;
}

console.log(normalname(n1));
//
//  let name = (string, arr) => {
//     let newArr = [];
//     if (string.includes(arr)) {
//         let a = string.split(arr);
//         a.forEach((x) => {
//             if (x) newArr.push(x);
//         })
//         console.log(newArr.join(" "));
//     }
//  }
//  name(n4, '..---__');

// s1 = 'Harry..Potter';
// s2 = 'Ron---^Whisley';
// s3 = 'Hermione--  &+Granger';
// normalize = (ar) => {
//     let string = ar.split('')
//         .map(xx => (xx >= 'A' && xx <= 'Z') || (xx >= 'a' && xx <= 'z') ? xx : " ").join("").trim();
//     while (string.includes('  ')) {
//        string=string.replace('  ', ' ');
//     }
//     return string;
// }
// console.log(normalize(s1));
// console.log(normalize(s2));
// console.log(normalize(s3));

    // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randonNan = (number) => {
//     let arr = [];
//     for (let n = 0; n < number; n++) {
//     arr.push(Math.round(Math.random()*100));
//     }
//     return arr;
//
// }
// console.log(randonNan(15));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// function sortR (length, ar) {
//     let empArr = [];
//     for (let i = 0; i < length; i++) {
//         empArr.push(Math.floor(Math.random()*ar))
//     }
//     return empArr.sort((c,d) => c - d);
// }
// console.log(sortR(10, 50));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let massRandon = (length, num) => {
//     let arrayR = [];
//     for (let i = 0; i < length; i++) {
//         arrayR.push(Math.floor(Math.random()*num))
//     }
//     return arrayR.filter(x => x % 2 === 0)
// }
// console.log(massRandon(10, 100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let massC = (size, ar) => {
//     let arrC = [];
//     for (let i = 0; i < size; i++) {
//         arrC.push(Math.floor(Math.random()*ar))
//
//     }
//     return arrC.map(value => value.toString());
// }
// console.log(massC(10, 50));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let sortNums = (arr, direction) => {
//     if (direction === 'fgd') return arr.sort((c, d) => c - d);
//     if (direction === 'dect') return arr.sort((c, d) => d - c);
// }
// console.log(sortNums([11, 21, 3], 'fgd'));
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let coursesSort = coursesAndDurationArray.sort((c,d) => d.monthDuration - c.monthDuration);
// console.log(coursesSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesFilter = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// })
// console.log(coursesFilter);