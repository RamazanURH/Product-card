function weatherComputation (city, deg) {
  console.log(`Сейчас в ${city} температура - ${deg} градусов по Цельсию`)
};
weatherComputation('Ростове-на-Дону', '+27');

const  SPEED_LIGHT = 299792458 ;

function compareSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость')
  }  else if (speed < SPEED_LIGHT) {
    console.log('Субсветовая скорость')
  } else if (speed === SPEED_LIGHT) {
    console.log('Скорость света')
  }
};
compareSpeed(299792458);

const product = 'lemon';
const price = 190;

function buyPrice(budget) {
  if (budget > price) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else if (budget < price) {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`)
  }
};
buyPrice(100);

const name = 'Ramazan';
const age = 23;
const student = true;

function checkAge() {
  if (age > 18) {
    console.log('Совершеннолетний!')
  } else if (age < 18) {
    console.log('Несовершеннолетний!')
  } else if (age === 0) {
    console.log('Такого возраста не существует!')
  } else {
    console.log('Вы ввели некорекктный возраст!')
  }
};
checkAge();