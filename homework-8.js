import { products } from './products.js';

const productTemplate = document.getElementById('product-card-template')
const productList = document.querySelector('.product-list');

const FIELD_MAPPING ={
  imageSrc: '.product-image',
  category: '.product-category',
  name: '.product-name',
  description: '.product-description',
  compound: '.product-compound',
  price: '.product-price'
};

productList.innerHTML = '';
const renderProducts = (productsArray) => {
productsArray.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true);

  for (const key in FIELD_MAPPING) {
    const selector = FIELD_MAPPING[key];
    const element = productClone.querySelector(selector);
    
    if (element) {
      const value = product[key];
      
      if (key === 'imageSrc') {
        element.src = value;
        element.alt = product.name;
      }
      else if (key === 'price') {
        element.textContent = `${value} ₽`;
      }
      else if (key === 'compound') {
        element.textContent = value.join(', ');
      }
      else {
        element.textContent = value;
      }
    }
  }
  productList.appendChild(productClone);
});
}

let count = promt("Сколько карточек отобразить? От 1 до 5")
count = Number(count);
if (isNaN(count) || count < 1 || count > 5) {
  alert("Некорректное значение. Пожалуйста, введите число от 1 до 5.");
}
const productsToRender = products.slice(0, count)
renderProducts(productsToRender);

const productNamesString = products.reduce((acc, product,) => {
  if (acc === '') {
    return product.name;
  } else {
    return `${acc}; ${product.name}`;
  }
}, '');
console.log(productNamesString);

const productInfoObject = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});
console.log(productInfoObject);