const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '15');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);

let lastFilm = prompt('Один из последних просмотренных фильмов?');
let feedback = prompt('На сколько оцените его?');

let lastFilm2 = prompt('Один из последних просмотренных фильмов?');
let feedback2 = prompt('На сколько оцените его?');

let movies = {
    'lastFilm': feedback,
    'lastFilm2': feedback2,
};

personalMovieDB.movies[lastFilm] = feedback;
personalMovieDB.movies[lastFilm2] = feedback2;

console.log(personalMovieDB);