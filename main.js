const firstproductCard = document.querySelector('.catalog__product');
const productCards = document.querySelectorAll('.catalog__product');
const titleFocus = document.querySelector('.catalog__heading')
const BtnColor = document.querySelector('.catalog__color')
const changeColorCardButton = document.querySelector('#change-first-color-button');
const changeColorCardAllButton = document.querySelector('#change-color-card-all-button');
const openGoogleBtn = document.querySelector('#open-google');
const outputLogBtn = document.querySelector('#output-consol-log')
const greenColorHash = '#00ff00';
const redColorHash = '#ff0000';
const googleURL = 'https://google.com';

changeColorCardButton.addEventListener('click', () => {
  firstproductCard.style.backgroundColor = redColorHash;
});

changeColorCardAllButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
});

openGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти в гугл?')
  if (answer === true) {
      window.open(googleURL)
  } else {
    return;
  }
};

outputLogBtn.addEventListener('click', () => {
  outputConsoleLog('ДЗ №6')
});

function outputConsoleLog (message) {
  alert(message)
  console.log(message)
};

titleFocus.addEventListener('mouseover', () => {
  console.log(titleFocus.textContent)
});

BtnColor.addEventListener('click', () => {
  BtnColor.classList.toggle('catalog__color-active')
});