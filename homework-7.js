// Уровень 1:
// Задание - 1. Создал файл homework-7.js и подключил его в index.html

// Задание - 2. Массив до 10 но отфилтрованный от чисел меньше 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);

// Задание - 3. Поиск опрелеоенную сущность в массиве
const movies = [
  "Начало",
  "Интерстеллар",
  "Темный рыцарь",
  "Бойцовский клуб",
  "Побег из Шоушенка",
  "Матрица",
  "Форрест Гамп",
  "Гладиатор",
  "Джокер",
  "Остров проклятых"
];

const searchMovie = (title) => {
  if (movies.includes(title)) {
    console.log(`Фильм ${title} найден в списке.`)
  } else {
    console.log(`Фильм ${title} не найден в списке.`)
  }
}
searchMovie();

// Задание - 4. Функция которая принимает массив и переворачивает его порядок
const reverseArray = (arr) => {
  console.log(arr.reverse())
}
reverseArray(movies);
reverseArray(numbers);

// Уровень 2:
// Задание - 5. Добавил массив comments в comments.js

// Задание - 6. Сделал константу экспортируемой и импортировал её сюда
import { comments } from './comments.js';

// Задание - 7. Фильтрация комментариев по email с доменом .com
const filterCommentsByEmail = comments.filter(comment => comment.email.includes('.com'))
console.log(filterCommentsByEmail);

// Задание - 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const updatedComments = comments.map(comment => {
  if (comment.id <= 5) {
    return {...comment, postId: 2 };
  } else {
    return {...comment, postId: 1 };
  }
});
console.log(updatedComments);

// Задание - 9. Перебрать массив, что бы объекты состояли только из айди и имени
const shortComments = comments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  }
})
console.log(shortComments);

// Задание - 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
const commentsWithValidatity = comments.map(comment => {
  if (comment.body.length > 180) {
    return { ...comment, isInvalid: true };
  } else {
    return { ...comment, isInvalid: false };
  }
})
console.log(commentsWithValidatity);

// Уровень 3:
// Задание - 11. Выводим массив почт через reduce
const emails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emails);

// Задание - 12. Привести массив к строке
const emailsString = emails.join('; ');
console.log(emailsString);