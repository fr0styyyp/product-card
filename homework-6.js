// Задание - 1. Результат теста в пулл реквесте

// Задание - 2. Создал файл homework-6.js и подключил его в index.html

// Задание - 3. Обьект на основе моих данных и правильное наименование переменных
const myData = {
  name: 'AbdurRakhman',
  age: 16,
  isStudent: true,
  country: 'Kazakhstan',
  city: 'Taraz',
  email: 'impost.side@gmail.com',
  lastName: 'Amire',
  hasRelationship: false,
  favouriteColor: 'blue',
}

// Задание - 4. Обьект который хранит данные о машине
const car = {
  brand: 'Porsche',
  model: '911 Turbo S',
  year: 2020,
  color: 'white',
  transmission: 'automatic',
}

car.owner = myData

// Задание - 5. Функция которая проверяет свойство максимальной скорости
const checkMaxSpeed = (car) => {
  if (!car.maxSpeed) {
    car.maxSpeed = 300
  }
}
checkMaxSpeed()

// Задание - 6. Функция которая выводит в консоль свойство и значение обьекта
const logObjectProperties = (obj, propertyName) => {
  console.log(obj[propertyName])
}
logObjectProperties()

// Задание - 7. Массив с названием продуктовых карточек
const productCards = ['Увлажняющий мусс', 'Увлажняющая маска', 'Гель для умывания', 'Подарочный набор №1', 'Подарочный набор №5'];

// Задание - 8. Массив, состоящий из объектов, где объект представляет собой книгу
const books = [
  { title: '1984', author: 'George Orwell', year: '1949', coverColor: 'red', genre: 'Dystopian' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: '1937', coverColor: 'green', genre: 'fantasy' },
  { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', year: '1997', coverColor: 'blue', genre: 'fantasy' }
];
books.push({ title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', year: '1997', coverColor: 'blue', genre: 'fantasy' })

// Задание - 9. Массив с определенными книгами, и обьеденный массив
const marvelBooks = [
  { title: 'Marvel Encyclopedia', author: 'DK Publishing', year: 2019, coverColor: 'red', genre: 'Comics' },
  { title: 'Spider-Man: The Ultimate Guide', author: 'Tom DeFalco', year: 2007, coverColor: 'blue', genre: 'Comics' },
  { title: 'Iron Man: Extremis', author: 'Warren Ellis', year: 2005, coverColor: 'silver', genre: 'Comics' }
];
const allBooks = [...books, ...marvelBooks];

// Задание - 10. Функция которая проверяет на редкость книги
const isRareBook = (bookArray) => {
  bookArray.forEach((book) => {
    book.isRare = book.year < 2000
  })
}
isRareBook(allBooks)