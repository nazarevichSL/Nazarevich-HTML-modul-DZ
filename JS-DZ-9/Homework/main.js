// Все робити за допомоги js.
// - створити блок,
//  - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// div.style.background = 'silver';
// div.style.color = 'red';
// div.style.fontSize = '30px';
// div.innerText = "Okten";
// document.body.appendChild(div);
// let div1 = div.cloneNode(true);
// document.body.appendChild(div1);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let mas =  ['Main','Products','About us','Contacts'];
// let masDiv = document.getElementsByClassName('menu')[0];
// mas.forEach(xxx => {
//     let li = document.createElement('li');
//     li.innerText = xxx;
//     masDiv.appendChild(li);
// })

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText = `${coursesElement.title}-${coursesElement.monthDuration}`;
//     document.body.appendChild(div);
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>, в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const courseElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = courseElement.title;
    let p = document.createElement('p');
    p.innerText =courseElement.monthDuration;
    div.append(h1,p);
    document.body.appendChild(div);
}
