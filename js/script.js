"use strict";

const findSmallMassive = [5, 355, 685, 2];
let max = findSmallMassive[0];

for (let i = 0; i < findSmallMassive.length; i++) {
    if (findSmallMassive[i] > max) {
        max = findSmallMassive[i];
        console.log(max);
    }
}



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

const family = [];

function showFamily(arr) {
    if (arr != '') {
        console.log(`Семья состоит из ${arr}`);
    } else {
        console.log("Семья пуста");
    }
}

showFamily(family);



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin','DCDSVFDS'];

function standardizeStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i].toLowerCase();
        console.log(a);
    }
}

standardizeStrings(favoriteCities);



const someString = 'This is some strange string';

function reverse(str) {
    let a = str.reverse();
    console.log(a);
}

reverse(someString);




let str1 = "Cause i love you";

let j = [];

j = str1;

console.log(j);


