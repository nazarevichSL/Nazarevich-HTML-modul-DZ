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
// numbers = [1,5,0,12,-2];
// function maxNan (numbers) {
//     let max = numbers[0];
//     for (const number of numbers) {
//         if (number > max) {
//             max = number;
//             console.log(max);
//         }
//     }
//     return max;
//
// }

// - створити функцію яка повертає найменьше число з масиву
// numbers = [1,5,0,12,-2];
// function min (numbers) {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (number > min) {
//             min = number;
//         }
//     }
//     return min
// }

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// numbers = [1,2,13];
// function sum (numbers) {
//     let summa = 0;
//     for (const numS of numbers) {
//         summa = summa + numS;
//     }
//     return summa;
// }

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// numbers = [1,4,7]; //12/3=4
// function arr (numbers) {
//     let summa = 0;
//     for (const numS of numbers) {
//         summa = summa + numS;
//     }
//     return summa / numbers.length;
// }
// document.write(arr(numbers))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function maxminArr (arg) {
//     let min = argum[0];
//     let max = argum[0];
//     for (const num of argum) {
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
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function roundMass (arr) {
//     for (i = 0; i < 10; i++) {
//     let arr[i]= Math.round(Math.random()*100);
//     }
//     return arr
// }
// document.write(roundMass(10))


// function funRandom (length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrayEmpty.push(Math.floor(Math.random()*100));
//     }
// return arrayEmpty
// };
//
// document.write(funRandom(12))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit -
// аргумент, який характеризує кінцеве значення діапазону.
// function roundMasslimit (arr, limit) {
//     for (i = 0; i < 10; i++) {
//     let arr[i]= Math.round(Math.random()*limit);
//     }
//     return arr
// }
// document.write(roundMasslimit(10,12))


// function randomNumber(length,limit) {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }
// document.write(randomNumber(10,100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function revers (arr) {
    let revArr = [];
    for (let i = arr.length - 1; n = 0; i >= 0; i--; n++) {
        revArr [n] = revArr [i];
    }
    return revArr
}
document.write( revers([1,2,3]);


// function reverse(arr) {
//     let arr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//
//     return newArr;
// }
// document.write( reverse([1,2,3]);