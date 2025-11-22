// Задание-1 Создал файл homework-8.js
// Задание-2  Импортировал массив products из product-cards.js
import { products } from './product-cards.js';

// Задание-3  Создал шаблон и реализовал его здесь
const productTemplate = document.getElementById('product-card-template')
const productList = document.getElementById('product-list');

const FIELD_MAPPING = {
  imageName: '.product-image',
  category: '.product-category',
  name: '.product-name',
  description: '.product-description',
  compound: '.product-compound',
  price: '.product-price'
};

const renderProducts = productsArray => {
  productsArray.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);

    for (const key in FIELD_MAPPING) {
      const selector = FIELD_MAPPING[key];
      const element = productClone.querySelector(selector);
      
      if (element) {
        const value = product[key];
        
        if (key === 'imageName') {
          element.src = `./images/${value}.png`;
          element.alt = product.name;
        } else if (key === 'price') {
          element.textContent = `${value} ₽`;
        } else if (key === 'compound' && Array.isArray(value)) {
          element.innerHTML = '';
          value.forEach(item => {
            const li = document.createElement('li');
            li.className = 'product-compound-item';
            li.textContent = item;
            element.appendChild(li);
          });
        } else {
          element.textContent = value;
        }
      }
    }
    productList.appendChild(productClone);
  });
}

// Задание - 6 Запросил у пользователя количество карточек для отображения и отобразил их
let count = prompt("Сколько карточек отобразить? От 1 до 5")
count = Number(count);
if (isNaN(count) || count < 1 || count > 5) {
  alert("Некорректное значение. Пожалуйста, введите число от 1 до 5.");
}
const productsToRender = products.slice(0, count)
renderProducts(productsToRender);

// Задание-4  Использовал метод reduce чтобы получить строку с названиями продуктов, разделёнными точкой с запятой
const productNamesString = products.reduce((acc, product) => {
  return acc ? `${acc}; ${product.name}` : product.name;
}, '');
console.log(productNamesString);

// Задание-5  Использовал метод reduce чтобы получить массив объектов, где ключем является название продукта, а значением - его описание
const productInfoObject = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});
console.log(productInfoObject);