// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let lengthHw = 'hello world';
// console.log(lengthHw.length);
//
// let lengtLi = 'lorem ipsum';
// console.log(lengthHw.length);
//
// let lengtJc = 'javascript is cool';
// console.log(lengtJc.length);

// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// str = 'hello world';
// console.log(str.toUpperCase());

// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
//
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать'];

// let str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//     let split = str.split(' ');
//     return split;
// }
// console.log(stringToarray(str));
// document.write(stringToarray(str));

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     return str.substring(0, length);
// }
// console.log(delete_characters(str, 7));
// document.write(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP';

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     return str.replaceAll(' ', '-').toUpperCase();
// }
// console.log(insert_dash(str));

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let stringT = (str) => {
//     return str[0].toUpperCase()+str.slice(1);
// }
// stringT('hello');
// console.log(stringT('hello'));
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'лондон москва киев минск';
// function capitalize(str) {
//     return str.split(' ').map(word=>word[0].toUpperCase() + word.slice(1)).join(' ');
//    }
// console.log(capitalize(str));
// document.write(capitalize(str));

// второй вариант
// let str = 'лондон москва киев минск';
// const capitalize = (str) => {
//     let split = str.split(" ");
//     let result = [];
//     for (const splitElement of split) {
//         result.push(splitElement[0].toUpperCase()+splitElement.slice(1));
//     }
//     return result.join(' ');
// }
// console.log(capitalize(str));

// const capitalize = str => {
//     let arr = str.split(' ');
//     let result = [];
//     for (const resultElement of str) {
//         result.push(resultElement);
//     }
//
//     return result.join(' ');
// }
// console.log(capitalize('Каждый охотник желает знать'));
