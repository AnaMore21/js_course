"use strict";

let numberOfFilms;

function start(numberOfFilms) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '15');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '15');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt('1 Один из последних просмотренных фильмов?');
        let feedback = prompt('1 На сколько оцените его?');

        if (lastFilm != '' && lastFilm != null && lastFilm.length < 50 &&
            feedback !== '' && feedback !== null && feedback.length < 50) {
            personalMovieDB.movies[lastFilm] = feedback;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);