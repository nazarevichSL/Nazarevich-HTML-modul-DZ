// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber (a,b,c) {
//     if (a < b && a < c) {
//         if (b < c) {
//             console.log(a,b,c);
//         } else {
//             console.log(a,c,b);
//         }
//     }
//     if (b < a && b < c) {
//         if (a < c) {
//             console.log(b,a,c);
//         } else {
//             console.log(b,c,a);
//         }
//     }
//     if (c < a && c < b) {
//          if (a < b) {
//             console.log(c,a,b);
//         } else {
//              console.log(c,b,a);
//          }
//     }
// }
// minNumber(1,3,2)

// я понял это задание так!!!
// function minNan (a,b,c) {
//     if (a < b && a < c) {
//         console.log(a);
//     }
//     if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// }
// minNan(5,6,4)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber (a,b,c) {
//     if (a > b && a > c) {
//         if (b > c) {
//             console.log(a,b,c);
//         } else {
//             console.log(a,c,b);
//         }
//     }
//     if (b > a && b > c) {
//         if (a > c) {
//             console.log(b,a,c);
//         } else {
//             console.log(b,c,a);
//         }
//     }
//     if (c > a && c > b) {
//
//         if (a > b) {
//             console.log(c, a, b);
//         } else {
//             console.log(c, b, a);
//         }
//     }
// }
// maxNumber(1,2,3);
// я понял это задание так!!!
// function maxNan (a,b,c) {
//     if (a > b && a > c) {
//         console.log(a);
//     }
//     if (b > a && b > c) {
//         console.log(b);
//     }
//     if (c > a && c > b) {
//         console.log(c);
//     }
// }
// maxNan(5,3,8)
// - створити функцію яка повертає найбільше число з масиву
// let numbers = [1,5,0,12,-2];
// function maxNan (arr) {
//     let max = arr[0];
//     for (const number of arr) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     console.log(max);
//     return max;
// }
// maxNan (numbers)

// - створити функцію яка повертає найменьше число з масиву
// numbers = [1,5,0,12,-2];
// function minNan (arr) {
//     let min = arr [0];
//     for (const number of arr) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     console.log(min);
//     return min
// }
// minNan (numbers)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// numbers = [1,2,13];
// function sum (arr) {
//     let summa = 0;
//     for (const numS of arr) {
//         summa = summa + numS;
//     }
//     console.log(summa)
//     return summa;
// }
// sum (numbers)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// numbers = [1,4,7]; //12/3=4
// function average (arr) {
//     let summa = 0;
//     for (const numS of arr) {
//         summa = summa + numS;
//     }
//     return summa / numbers.length;
// }
// console.log(average (numbers));
// document.write(average (numbers))
// average (numbers)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function maxminArr (arg) {
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
//     console.log("max", max)
//     return min;
// }
// document.write('Мінімальне число з введених: ' + maxminArr (1,2,6,9,4))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
// function roundMass (arr) {
//     let arrMas = []
//     for (i = 0; i < arr; i++) {
//     arrMas[i] = Math.round(Math.random()*100);
//     }
//     return arrMas
// }
// document.write(roundMass(10))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit -
// аргумент, який характеризує кінцеве значення діапазону.
// function roundMasslimit (arr, limit) {
//     let arrMaslimit = [];
//     for (i = 0; i < arr; i++) {
//         arrMaslimit[i]= Math.round(Math.random()*limit);
//     }
//     return arrMaslimit;
// }
// document.write(roundMasslimit(10,1000))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1,2,3];
// function revers (arr) {
//     let revArr = [];
//     for (let i = arr.length - 1, n = 0; i >= 0; i--, n++) {
//         revArr[n] = arr[i];
//     }
//     return revArr
// }
// document.write( revers(array));