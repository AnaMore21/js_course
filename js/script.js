"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

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
        let lastFilm = prompt('1 Один из последних просмотренных фильмов?', 'Adeli');
        let feedback = prompt('1 На сколько оцените его?', '8');

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

//rememberMyFilms();

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

//detectPersonalLevel();

function showDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt('Ваш любимый жанр под номером ${i}');
    }
}

writeYourGenres();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         let genre = prompt(`Напишите ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }
// writeYourGenres();