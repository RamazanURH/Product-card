// №4
const subscribeInput = document.querySelector('.footer__input');
const subscribeBtn = document.querySelector('.footer__btn');
const footerForm = document.querySelector('.footer__form');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

footerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = subscribeInput.value;
  if (!email) {
    console.log('Email не заполнен');
    return;
  }
  if (!emailRegex.test(email)) {
    console.log('Некорректный email');
    return;
  }
  console.log({ email: email });
});
// Уровень 2

const modalRegistry = document.querySelector('.modal__registry');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const emailForm = document.querySelector('.modal__form');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password-repeat');
const passwordError = document.querySelector('.password-error');

modalRegistry.addEventListener('click', () => {
  modal.classList.add('modal-showed');
})
modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
})

let user = null;

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!emailForm.checkValidity()) {
    passwordError.textContent = 'Заполните форму корректно';
    return;
  } else if (password.value !== passwordRepeat.value) {
    passwordError.textContent = 'Пароли не совпадают';
    return;
  } else {
    passwordError.textContent = '';
  }
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.createdOn = new Date();
  user = data;
  console.log(user);
  modal.classList.remove('modal-showed');
  form.reset();
});