// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNan = (a,b,c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     }
//     if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// }
// minNan(1,4,3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } if (b > a && b > c) {
//         console.log(b);
//     }
//     if (c > a && c > b) {
//         console.log(c);
//     }
// }
// maxNumber(2,5,3);

// - створити функцію яка повертає найбільше число з масиву
// let maxNum = (arr) => {
//     let max = arr [0];
//     for (const number of arr) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     console.log(max);
//     return max;
// }
// maxNum ([1,9,4,6,2,7]);

// - створити функцію яка повертає найменьше число з масиву
// let minNum = (arr) => {
//     let min = arr [0];
//     for (const number of arr) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     console.log(min);
//     return min;
// }
// minNum([5,2,3,8,7,4])
//

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = (arr) => {
//     let summa = 0;
//     for (const arrSumma of arr) {
//         summa = summa + arrSumma;
//     }
//     console.log(summa);
//     return summa;
// }
// sum ([5,9,7])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let sum = (ar) => {
//     let summa = 0;
//     for (const arElement of ar) {
//         summa = summa + arElement;
//         summaS = summa / ar.length;
//     }
//     console.log(summaS);
//     return summaS;
// }
// sum ([2,5,8]);
//
//



// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let maxminArr = (arg) => {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const num of arguments) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//     }
//     console.log("max", max);
//     return min;
// }
// document.write('Минимальне число з введених: ' + maxminArr (1,2,6,9,4));
//



// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
// let roundMass = (arr) => {
//     let arrMass = [];
//     for (n=0; n<arr; n++) {
//         arrMass[n] = Math.round(Math.random()*100);
//     }
//     return arrMass
// }
// document.write(roundMass(15))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit -
// аргумент, який характеризує кінцеве значення діапазону.
// let roundMasslimit = (arr, limit) => {
//     let arrMaslimit = [];
//     for (i = 0; i < arr; i++) {
//         arrMaslimit[i]= Math.round(Math.random()*limit);
//     }
//     return arrMaslimit;;
// }
// document.write(roundMasslimit(10,1000));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let revers = (arr) => {
//     let revArr = [];
//     for (let i = arr.length - 1, n = 0; i >= 0; i--, n++) {
//         revArr[n] = arr[i];
//     }
//     console.log(revArr);
//     document.write(revArr);
//     return revArr;
// }
// revers([1,2,3]);
