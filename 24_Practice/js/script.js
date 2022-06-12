/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания


const numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "0")

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
//1-2
for (let i = 0; i < 2; i++){
    const film = prompt("Один з останніх фільмів?", "")
    const rank = prompt("На скільки можете оцінити?", "0")
    if (film === '' || rank === '' || film.length > 50 || rank.length > 50 || film === null || rank === null){
        i--
    }  else {
        personalMovieDB.movies[film] = rank
    }
}
//3
if (personalMovieDB.count < 10){
    alert("Замало фільмів")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Ви класичний глядач")
} else if (personalMovieDB.count > 30) {
    alert("Ви кіноман")
} else {
    alert("Помилка")
}

console.log(personalMovieDB)

