// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let s = (a, b) => a * b;
// console.log(s (10,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//  let s = (r) => 3.14 * Math.pow(r, 2);
//  console.log(s (10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let sc = (h,r) => Math.round ((Math.PI * Math.pow(r, 2)) * h);
// console.log(sc(1,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let ar = (...mmm) => {
//     console.log(mmm);
// }
// ar (1,2,3,4,5,-3);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let par_t = (text) => {
//     document.write(`<p>`);
//     document.write(`${text}`);
//     document.write(`</p>`);
// }
// par_t("dfd gdgd")

//или
// let par_t = (...text) => {
//    document.write(`<p>`);
//     document.write(`${text}`);
//     document.write(`</p>`);
// }
// par_t('hgjhhngfc пвапвс');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let par_t = (...text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// par_t("abc");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let par_t = (text, site) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < site; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// par_t("abc", 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//  let mass_element = (art) => {
//      document.write(`<ul>`);
//      for (const artElement of art) {
//          document.write(`<li>${artElement}</li>`);
//      }
//      document.write(`</li>`);
//  }
//  mass_element([5<6, 3===3, 7>8]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let user = [
//     {id: 21, name: 'oleg', age: 31},
//     {id: 25, name: 'olga', age: 28},
//     {id: 28, name: 'orest', age: 33}
// ]
// let art_user = (ar) => {
//     for (const arrElement of ar) {
//         document.write(`<div>${arrElement.id} . ${arrElement.name} - ${arrElement.age}</div>`);
//
//     }
// }
// art_user(user);