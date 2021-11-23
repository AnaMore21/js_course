const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '15');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

// let i = 0;
// while (i < 2) {
//     let lastFilm = prompt('2 Один из последних просмотренных фильмов?');
//     let feedback = prompt('2 На сколько оцените его?');
//     personalMovieDB.movies[lastFilm] = feedback;
//     i++;
//     console.log('done');
// }

// let i = 0;
// do {
//     let lastFilm = prompt('3 Один из последних просмотренных фильмов?');
//     let feedback = prompt('3 На сколько оцените его?');
//     personalMovieDB.movies[lastFilm] = feedback;
//     i++;
// } while (i < 2); {
//     console.log('done');
// }

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);