// №3 Создал объект на основе моих данных

const user = {
  name: 'Ramazan',
  surname: 'Uzdenov',
  age: 23,
  country: 'Russia',
  city: 'Cherkessk',
  email: 'uzdenr7001@gmail.com',
  job: 'Student',
};

// №4 Создал объект хранящий данные об автомобиле и его владельце

const car = {
  brand: 'bmw',
  model: 'm5',
  year: 2010,
  color: 'black',
  transmission: '7-speed automated manual transmission',
};
car.owner = user;

// №5 Создал функцию для проверки обьекта, есть ли в нем максимальная скорость

function hasMaxSpeed (car) {
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 340
  } else {
    return
  }
};
hasMaxSpeed(car);

// №6 Создал функцию для вывода свойства объекта

function getBrand (car, property) {
  return car[property]
};

// №7 Массив списка с продутами

const products = ['milk', 'cheese', 'butter', 'eggs', 'yogurt'];

// №8 Создал моссив состоящий из объектов и добавил обьект в конец через (push)

const books1 = [
  { title: 'Граф Монте-Кристо', author: 'Александр Дюма', year: 1844, coverColor: "синий", genre: "приключения"},
  { title: 'Три мушкетёра', author: 'Александр Дюма', year: 1844, coverColor: "красный", genre: "исторический роман" },
  { title: 'Богатый папа, бедный папа', author: 'Роберт Кийосаки', year: 1997,},
  { title: 'Миссия выполнима. Технология счастливой жизни', author: 'Маргулан Сейсембай', year: 2023,},
];

books1.push({ title: 'Тарас Бульба', author: 'Николай Гоголь', year: 1835, genre: 'историческая повесть'});

// №9 Создал еще один массив и объеденил его с первым 

const books2 = [
  { title: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг', year: 1997, coverColor: "зелёный", genre: "фэнтези" },
  { title: 'Гарри Поттер и Тайная комната', author: 'Джоан Роулинг', year: 1998, coverColor: "синий", genre: "фэнтези" },
  { title: 'Гарри Поттер и узник Азкабана', author: 'Джоан Роулинг', year: 1999, coverColor: "фиолетовый", genre: "фэнтези" }
];

const books3 = [...books1, ...books2];

// №10 Создал функцию для проверки книги на редкость с помощью метода map

const canBooks = books3.map( function(book) {
  if (book.year > 2000) {
    return {
      ...book,
      isRare: true
    }
  } else {
    return {
      ...book,
      isRare: false
    }
  }
});

console.log(canBooks)
