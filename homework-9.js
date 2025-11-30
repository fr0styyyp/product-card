// Задание 1 - Создаем файл, все как прошлых дз.
// Задание 2 - Почитать про теги: <label>, <form>, <input> (источники прикреплены в конце ДЗ)
// Задание 3 - Сверстать данный footer (https://www.figma.com/design/H8BBp1sq6u6N0MqdF9hrsq/Untitled?node-id=0-1&t=xbP3bxfa7ojVOSJk-1), используя семантические теги (footer, nav и т.д.)
// Задание 4 - Валидация - email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется

const subscribeForm = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email-input');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (!email) {
    alert('Введите ваш email.');
    return;
  }
  if (!emailInput.checkValidity()) {
    alert('Пожалуйста, введите корректный email.');
    return;
  }

  console.log(`{ email: ${email} }`);
});


// Задание 5 - Создать форму для регистрации и сделать валидацию

let registeredUser = null
const registerForm = document.getElementById('registerForm');


registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData.entries()); 
  
  for(let key in data) {
    data[key] = data[key].trim();
  }
  if (data.password !== data.repeatedPassword) {
    alert('Пароли не совпадают');
    return;
  }

  const user = {
    ...data,
    createdOn: new Date()
  };
  console.log(user);
  
  registeredUser = user; // Задание - 6 сохранил в переменную
});

// Задание 7 - создал кнопку аутенфикации
// Задание 8 - Создать модальное окно

const openBtn = document.getElementById('authBtn')
const modal = document.getElementById('authModal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.modal-close')

openBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed')
  overlay.classList.add('overlay-showed')
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed')
  overlay.classList.remove('overlay-showed')
});

// Задание - 9 Вход по логину и паролю

const loginForm = document.getElementById('loginForm');
let currentUser = null 
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const loginInput = document.getElementById('loginInput').value.trim();
  const passwordInput = document.getElementById('passwordInput').value.trim();

  if (!registeredUser || passwordInput !== registeredUser.password || loginInput !== registeredUser.login) {
    alert('Логин или пароль введено не верно');
    return;
  }

  // Успешный вход
  console.log('Пользователь вошёл:', registeredUser.login);
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
  // Задание 10
  currentUser = { ...registeredUser }
  currentUser.lastLogin = new Date()
  console.log(currentUser)
});