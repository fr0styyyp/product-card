// покраска все карточки в синий цвет

const productCards = document.querySelectorAll('.card-container');
const changeColorBtn = document.querySelector('#change-all-card-color-btn');
const blueColor = '#0000FF';
const redColor = '#FF0000';

changeColorBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = blueColor)
})


// покраска первой карточки в красный цвет

const firstProductCard = document.querySelector('.card-container');
const changeFirstCardColorBtn = document.querySelector('#change-first-card-color-btn');

changeFirstCardColorBtn.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = redColor;
})


// открытие google.com в новой вкладке

const openGoogleBtn = document.querySelector('#open-google-btn');
const googleUrl = 'https://www.google.com';

openGoogleBtn.addEventListener('click', openGoogle);

function openGoogle() {
  const question = confirm('Вы действительно хотите открыть Google?');

  if (question === true) {
    window.open(googleUrl)
  } else {
    return;
  }
}


// Вывод в консоль лог

const outputConsoleLogBtn = document.querySelector('#output-console-log');

outputConsoleLogBtn.addEventListener('click', () => outputConsoleLog ('ДЗ №4'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Вывод в консоль при наведении на главный заголовок

const mainTitle = document.querySelector('.product-title');

mainTitle.addEventListener('mouseover', () => {
  console.log('Вы навели на заголовок!');
})


// Кнопка меняет цвет при клике

const toggleColorBtn = document.querySelector('#toggle-color-btn');

toggleColorBtn.addEventListener('click', () => {
  toggleColorBtn.classList.toggle('btn-blue');
  toggleColorBtn.classList.toggle('btn-red');
})