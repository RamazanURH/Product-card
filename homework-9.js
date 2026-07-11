// Уровень 1:
// № 2 Создал массив чисел и отфильровал его от 5 до 10

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = arrayOfNumbers.filter(number => number >= 5);

// №3 Создал массив строк, проверил есть ли в массиве определенная сущность

const movieTitles = [
  "Железный человек",
  "Мстители",
  "Стражи Галактики",
  "Мстители: Война бесконечности",
  "Человек-паук: Нет пути домой",
  "Дэдпул и Росомаха"
];

const hasMovie = movieTitles.includes("Мстители");

// №4 Написал функцию которая переварачивает порядок массива на противоположный 

function reverseArray(array) {
  return array.reverse()
}
reverseArray(movieTitles)
reverseArray(arrayOfNumbers)

// Уровень 2:
// № 6 
import { comments } from './comments.js';

//№7 Вывел в концоль те массивы в которых почта заканчивается на ".com"

const commentsWithComEmails = comments.filter(comment => comment.email.includes('.com'));

// №8 Перебрал массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

comments.forEach(function(comment) {
  if (comment.id <= 5) {
    comment.postId = 2
  } else {
    comment.postId = 1
  }
});

// №9 Перебраk массив, что бы объекты состояли только из айди и имени

const shortComments = comments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  }});

// №10 Перебирал массив, добавил объектам свойство isInvalid и проверил: если длина сообщения больше 180 символов - true, меньше - false.

const validatedComments = comments.map(comment => {
  if (comment.body.length > 180) {
    return {
    ...comment,
    isInvalid: true
    }
  } else {
    return {
    ...comment,
    isInvalid: false
    }
  }
});

// Уровень 3:
// №11 

const commentEmailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc
}, []);


const commentEmailsMap = comments.map(comment => {
  return comment.email
})

// №12 

const emailsAsString = commentEmailsReduce.toString()

const emailsJoin = commentEmailsReduce.join(', ')