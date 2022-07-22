"use strict";

let numberofFilms; // плюс означает то что будет равно числу

function start() {
    numberofFilms = +prompt("How much film you watched", ''); // плюс означает то что будет равно числу

    while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
        numberofFilms = +prompt("How much film you watched", '');
    }
}

start();

const personalMovieDB =  {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", '').trim(),
              b = prompt("На сколько оцените его?", '').trim();
            if (a === "" || a === null || a.length > 50 || b === "" || b === null || b.length > 50) {
                i--;
            }
    
            personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Error");
    }
}

detectPersonalLevel();


function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    } else {
        console.log("error");
    }
}

showMyDB();


function writeYourGenres() {
    let answerGenres;
    for (let i = 1; i <= 3; i++) {
        answerGenres = prompt(`Ваш любимый жанр по порядку ${i}`, "");
        personalMovieDB.genres[i-1] = answerGenres;
    }
    console.log(personalMovieDB.genres);
}

writeYourGenres();



const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};


for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}