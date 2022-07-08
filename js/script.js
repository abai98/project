"use strict";

const numberofFilms = +prompt("How much film you watched", ''); // плюс означает то что будет равно числу
const personalMovieDB =  {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const oneOfFilms = prompt("Один из последних просмотренных фильмов?", ''),
      howMuch = prompt("На сколько оцените его?", ''),
      twoOfFilms = prompt("Один из последних просмотренных фильмов?", ''),
      twohowMuch = prompt("На сколько оцените его?", '');

personalMovieDB.movies[oneOfFilms] = howMuch;
personalMovieDB.movies[twoOfFilms] = twohowMuch;

