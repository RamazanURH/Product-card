import { products } from "./products.js";

const productlist = document.getElementById('product-list')
const productTemplate = document.getElementById('product-template')

function getCardCount() {
  while(true) {
    let cardsCount = +prompt("Сколько карточек отобразить? От 1 до 5")
    if (cardsCount > 0 && cardsCount <= 5 ) {
      return cardsCount
    } else {
      alert("Ошибка!")
    }
  }
}

function renderProducts(productsArray, countToDisplay) {
  const productsToShow = productsArray.slice(0, countToDisplay)
  productsToShow.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true)
    productClone.querySelector('.catalog__image').src = `img/${product.img}.png`
    productClone.querySelector('.catalog__desc').textContent = product.skinType
    productClone.querySelector('.catalog__title').textContent = product.title
    productClone.querySelector('.catalog__text').textContent = product.description
    productClone.querySelector('.catalog__price-rub').textContent = `${product.price} \u20BD`
    const listElement = productClone.querySelector('.catalog__list')
    listElement.innerHTML = ''
    product.ingredients.forEach(ingredient => {
      const li = document.createElement('li')
      li.classList.add('catalog__item')
      li.textContent = ingredient
      listElement.appendChild(li)
    })
    productlist.appendChild(productClone)
  })
};


const countToDisplay = getCardCount();
renderProducts(products, countToDisplay);

const catalog = products.reduce((acc, product) => {
  acc.push({ [product.title]: product.description })
  return acc
}, []);
