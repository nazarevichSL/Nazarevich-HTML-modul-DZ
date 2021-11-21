// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a, b) {
//     return  a * b;
//    }
// rectangle (10, 20);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle (r) {
//    return 3.14 * Math.pow(r, 2);
// }
// circle(10);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder (h, r) {
//     return (Math.PI * Math.pow(r, 2)) * h;
// }
// cylinder(5, 10);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function massF (ar) {
//     for (const mas of ar) {
//     console.log(ar);
//     }
// }
// massF (45);
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par_t (text) {
//     document.write(`<p>`)
//     document.write(`${text}`)
//     document.write(`</p>`)
// }
// par_t("dfdxvdc")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function par_t (text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// par_t("abc")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function par_t (text, site) {
//     document.write(`<ul>`)
//     for (let i = 0; i < site; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// par_t("fdv", 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function mass_element (art) {
//     document.write(`<ul>`)
//     for (const artElement of art) {
//         document.write(`<li>${artElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// mass_element (456)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let art_user = [
    {id: 25, name: 'sergey', age: 38},
    {id: 26, name: 'anna', age: 30},
    {id: 27, name: 'ivan', age: 31},
];
function user (art_user) {
    for (const art_text of art_user) {
        document.write(`<div>${art_text.id} - ${art_text.name} - ${art_text.age}</div>`)
    }
}
