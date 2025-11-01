// Задание - 1. Скрин теста в пулл реквесте

// Задание - 2. Создал файл homework-5.js и подключил его в index.html

// Задание - 3. Функция - температура в городе
const getTemperatureOfCity = (city, temperature) => {
  console.log(`Сейчас в городе ${city} температура - ${temperature} градусов по Цельсию.`);
}
getTemperatureOfCity()

// Задание - 4. Функция - Проверка скорости
const speedOfSound = 343
const checkSpeed = (speed) => {
  if (speed >= speedOfSound) {
    console.log('Сверхзвуковая скорость');
  } else {
    console.log('Дозвуковая скорость');
  }
}
checkSpeed()

// Задание - 5. Функция - проверка бюджета на покупку
const product = 'Iphone 15 Pro';
const productPrice = 1000;
const checkBudget = (budget) => {
  if (budget >= productPrice) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - budget}$, пополните баланс`)
  }
}
checkBudget()

// Задание - 6. Наименование функции по своему усмотрению
const greetUser = (name) => {
  console.log(`Привет, ${name}!`)
}
greetUser()

// Задание - 7. Наименование переменных по своему усмотрению
const userAge = 25;
const userName = 'AbdurRakhman';
const isStudent = true;
