"use strict";

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; i < 3; j++) {
//         console.log(j);
        
//     }
// }


// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for(let j = 0; j < i; j++) {
//         result += "*";
//     }   
//     result += '\n';
// }


// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; i < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Second level: ${k}`);
            
//         }
//     }
// }


// for (i = 20; i > 10; i--) {
//    if (i === 13) {
//     break;
//    }
//    console.log(i);
// }


// for (i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// let arrayOfNumbers = [];

// for (i = 5; i < 10; i++) {
//     arrayOfNumbers[i] += i;
    
// }


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr);

// }



// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     data[i * 2];
//     console.log(data[i]);
// }



// const personalMovieDB = prompt("Сколько фильмов вы смотрели?");

// if (personalMovieDB < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB > 9 && personalMovieDB < 31) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB > 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }



let i = 0;

while (i < 1) {
    const a = prompt("Один из просмотренных фильмов?" , '');
    i++;
    if (a != null && a != '' && a.length < 50) {
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}