//        створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let a = [5, 6, 8, 1, 3];
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);
    console.log(a[3]);
    console.log(a[4]);

let b = ['aa', 'vv', 'dd', 'cc', 'mm'];
    console.log(b[0]);
    console.log(b[1]);
    console.log(b[2]);
    console.log(b[3]);
    console.log(b[4]);

let c = ['q', 'w', 'e', 'r', 't', 0, -2, 7, 3, 1, 5>6, 4===4, 7<9, 8===8, 4>5];
    console.log(c[0]);
    console.log(c[1]);
    console.log(c[2]);
    console.log(c[3]);
    console.log(c[4]);
    console.log(c[5]);
    console.log(c[6]);
    console.log(c[7]);
    console.log(c[8]);
    console.log(c[9]);
    console.log(c[10]);
    console.log(c[11]);
    console.log(c[12]);
    console.log(c[13]);
    console.log(c[14]);


// Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль
let week = [];
week [0] = 11;
week [1] = 'ass';
week [2] = 56;
week [3] = "wqe";
week [4] = 5<6;
console.log(week)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 0; i < 10; i++) {
    document.write(`<div>${'негретенок'}</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`<div>негретенок ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h1>событие</h1>`);
    i++
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let n= 0;
while (n <= 20) {
    document.write(`<h1>событие ${n+1}-го дня </h1>`);
    n++
}


// Cтворити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let m = [11, 22, 33, 44, 55, 66, 77, 88, 99, 19];
n = 0;
while (n < m.length) {
    console.log(m[n]);
    n++;
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let r = ['до', 'ре', 'ми', 'фа', 'соль', 'ля', 'си', 'до', 'ре', 'ми'];
i = 0;
while (i < r.length) {
    let not = r[i]
    console.log(not);
    i++;
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let xxx = [1, 'a', 'c', 8, 0, 'y', 5>4, 5===6, 'ee', 88];
a = 0;
while (a < xxx.length) {
   console.log(xxx[a]);
    a++
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let sss = [22, 33, 'hh', 77, 8===9, 'yy', 8>7, 5<6, 11, 'rr'];
for (const ss of sss) {
    if (typeof ss === "boolean") {
    console.log(ss);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let ddd = [111, 4>3, 555, 'tt', 999, 8===9, 'jj', 5<6, 111, 'ii'];
for (const dd of ddd) {
    if (typeof dd === "number") {
        console.log(dd);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let fff = [235, 20>25, 542, 'ttw', 457, 8>9, 'jdf', 8<10, 712, 'dsr'];
for (const ff of fff) {
    if (typeof ff === "string") {
        console.log(ff)
    }
}


// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let nnn = [2, 4>3, 6, 'tt', 4, 8===9, 'jj', 5<6, 8, 'ii'];
for (const nn of nnn) {
           console.log(nn);
    }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 1; i <= 10; i++) {
    console.log(i);
    document.write(`${i}`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i}`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (i = 1; i <= 100; i=i+2) {
    console.log(i);
    document.write(`${i}`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 === 0 && i !== 0) {
        console.log(i);
        document.write(`${i}`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 !== 0 && i !== 0) {
        console.log(i)
    }
}
