// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let xxx = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1.перебрати його циклом while
// let i = 0;
// while (i < xxx.length) {
//     console.log(xxx[i]);
//     i++;
// }
// 2. перебрати його циклом for
// for (const xx of xxx) {
//      console.log(xx);
// }
// или
//     for (n = 0; n < xxx.length; n++) {
//         const xx = xxx[n];
//         console.log(xx);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//     let s = 0;
//     while (s < xxx.length) {
//        if (s % 2 !== 0) {
//            console.log(xxx[s]);
//        }
//         s++;
//     }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (i = 0; i < xxx.length; i++) {
//     if (i % 2 !==0){
//     const xx = xxx[i];
//     console.log(xx)
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let k = 0;
// while (k < xxx.length) {
//     if (k % 2 === 0) {
//         console.log(xxx[k]);
//     }
//     k++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (i=0; i < xxx.length; i+=2) {
//     console.log(xxx[i])
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (i = 0; i < xxx.length; i++) {
//     if (xxx[i] % 3 === 0) {
//         xxx[i] = 'okten'
//         console.log(xxx[i])
//     }
// }
// console.log(xxx)

// 8. вивести масив в зворотньому порядку.
// for (let i = xxx.length - 1; i >= 0; i--) {
//     console.log(xxx[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// перебрати його циклом while
//     let y = xxx.length-1;
// while (y >= 0) {
//     console.log(xxx[y]);
//     y--;
// }
// перебрати його циклом for
// let c = xxx.length-1;
// while (c >= 0) {
//     console.log(xxx[c]);
//     c--;
// }
// перебрати циклом while та вивести  числа тільки з непарним індексом
// let s = xxx.length-1;
// while (s >= 0) {
//     if (s % 2 !== 0) {
//         console.log(xxx[s]);
//     }
//     s--;
// }
// перебрати циклом for та вивести  числа тільки з непарним індексом
// let i = xxx.length-1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(xxx[i]);
//     }
//     i--;
// }
// /  перебрати циклом while та вивести  числа тільки парні  значення
// let k = xxx.length-1;
// while (k >= 0) {
//     if (k % 2 === 0) {
//         console.log(xxx[k]);
//     }
//     k--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let z = xxx.length-1;
// while (z >= 0) {
//     if (z % 2 === 0) {
//         console.log(xxx[z]);
//     }
//     z-=2;
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (i = xxx.length-1; i >= 0; i--) {
//     if (xxx[i] % 3 === 0) {
//         xxx[i] = 'okten'
//         console.log(xxx[i])
//     }
// }
// console.log(xxx)

