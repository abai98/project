"use strict";

const howMuchFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

const numberOfFilms = howMuchFilms;

console.log(howMuchFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const watchedFilms = prompt("Один из последних просмотренных фильмов?", '');
const howMuch = prompt("На сколько оцените его?");

const movies = {
    'logan': watchedFilms,
    'abai': howMuch
};

console.log(movies);