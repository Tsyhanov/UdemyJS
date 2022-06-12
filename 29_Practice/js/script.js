/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "0")
    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "0")
    }
}

start();

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const film = prompt("Один з останніх фільмів?", "")
        const rank = prompt("На скільки можете оцінити?", "0")
        if (film === '' || rank === '' || film.length > 50 || rank.length > 50 || film === null || rank === null){
            i--
        }  else {
            personalMovieDB.movies[film] = rank
        }
    }
}
rememberMyFilms();

function detectPersonelLevel(){
    if (personalMovieDB.count < 10){
        alert("Замало фільмів")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Ви класичний глядач")
    } else if (personalMovieDB.count > 30) {
        alert("Ви кіноман")
    } else {
        alert("Помилка")
    }
}

detectPersonelLevel();

//2
function showMyDB(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB)
    }
}
//3
function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt("Ваш улублений жанр під номером " + (i+1), "Комедія")
    }
}

writeYourGenres();


