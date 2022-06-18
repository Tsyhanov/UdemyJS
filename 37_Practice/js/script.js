/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

/*
function start(){
    numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "0")
    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "0")
    }
}
*/
/*
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
}*/
/*
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
*/
/*
function showMyDB(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB)
    }
}
*/
/*
function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        let genre = prompt("Ваш улублений жанр під номером " + (i+1), "Комедія");
        if (genre != null && genre != ''){
            personalMovieDB.genres[i] = prompt("Ваш улублений жанр під номером " + (i+1), "Комедія")
        } else {
            i--;
        }
    }
    personalMovieDB.genres.forEach((item, index, arr)=>{
        console.log(`Любимый жанр ${item+1} - это ${item}`)
    }
    )
}
*/

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        let numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "0")
        while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)){
            numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "0")
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            const film = prompt("Один з останніх фільмів?", "")
            const rank = prompt("На скільки можете оцінити?", "0")
            if (film === '' || rank === '' || film.length > 50 || rank.length > 50 || film === null || rank === null){
                i--
            }  else {
                this.movies[film] = rank
            }
        }
    },
    detectPersonelLevel: function(){
        if (this.count < 10){
            alert("Замало фільмів")
        } else if (this.count >= 10 && this.count <= 30) {
            alert("Ви класичний глядач")
        } else if (this.count > 30) {
            alert("Ви кіноман")
        } else {
            alert("Помилка")
        }
    },
    showMyDB: function(){
        if (!this.privat){
            console.log(this)
        }
    },
    writeYourGenres: function(){
        let genre = '';
        for (let i = 0; i < 3; i++){
            genre = prompt("Ваш улублений жанр під номером " + (i+1), "Комедія");
            if (genre != '' && genre != null){
                this.genres[i] = genre;
            } else {
                i--;
            }
        }
        this.genres.forEach((item, index, arr)=>{
            console.log(`Любимый жанр ${index+1} - это ${item}`)
        }
        )
    },
    toggleVisibleMyDB: function(){
        if (this.privat){
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
}

const myMovieDB = Object.create(personalMovieDB);
myMovieDB.toggleVisibleMyDB();
myMovieDB.showMyDB();
myMovieDB.toggleVisibleMyDB();
myMovieDB.showMyDB();
myMovieDB.writeYourGenres();
