/**
 * 1 ЗАДАНИЕ
 *
 * Создайте объект car с свойствами brand, model и year, и методом start,
 * который выводит в консоль сообщение "Автомобиль {brand} {model} {year} года выпуска заведен".
 */

const car = {
  brand: "BMW",
  model: "M8",
  year: 2020,
  start: () => {
    console.log(
      `Автомобиль ${car.brand} ${car.model} ${car.year} года выпуска`
    );
  },
};
car.start();

/**
 * 2 ЗАДАНИЕ
 * Создайте объект user с свойствами name, age и методом greet,
 *  который выводит в консоль сообщение "Привет, меня зовут {name}, мне {age} лет".
 */
const user = {
  name: "Elizaveta",
  age: "20",
  greet: () => {
    console.log(`Привет, меня зовут ${user.name}, мне ${user.age} лет`);
  },
};

user.greet();

/**
 * 3 ЗАДАНИЕ
 *Создайте объект calculator с методами add, minus, multiply и divide,
  которые принимают два числа в качестве аргументов и выполняют соответствующую математическую операцию, возвращая результат.
 */
const calculator = {
  result: 0,
  sum (numb1, numb2)  {
    result = numb1 + numb2;
    console.log(`${numb1} + ${numb2} = ${result}`);
    this.result = result;
  },
  minus (numb1, numb2)  {
    result = numb1 - numb2;
    console.log(`${numb1} - ${numb2} = ${result}`);
    this.result = result;
  },
  divide (numb1, numb2)  {
    result = numb1 / numb2;
    console.log(`${numb1} / ${numb2} = ${result}`);
    this.result = result;
  },
  multiply (numb1, numb2) {
    result = numb1 * numb2;
    console.log(`${numb1} * ${numb2} = ${result}`);
    this.result = result;
  },
};
calculator.sum(1, 4);
console.log(calculator);
calculator.sum(calculator.result, 4);
console.log(calculator);

/**
 * 4 ЗАДАНИЕ
 *Создайте объект book с свойствами title, author и year, и методом getInfo, 
 который выводит в консоль информацию о книге в формате "Название: {title}, Автор: {author}, Год издания: {year}".
 */

const book = {
  title: "The picture of Dorian Gray",
  author: "Oscar Wilde",
  year: 1890,
  getThis: function () {
    console.log(this);
  },
  getInfo: () => {
    console.log(
      `Название: ${this.title}, Автор : ${this.author}, Год издания: ${this.year}`
    );
  },
};
book.getThis();
/**
 * 1 Задание
 * Создайте массив с числами (не менее 10) и выведите его длину
 * */
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Массив ${number} и его дллина ${number.length}`);
/**
 * 2 Задание
 * Создайте два новых массива на основании предыдущего,
 * содержащий только чётные и нечётные числа соответственно
 * */
let evenNumb = [];
let oddsNumb = [];

number.forEach(function (number) {
  if (number % 2 == 0) {
    evenNumb.push(number);
  } else {
    oddsNumb.push(number);
  }
});

console.log(`Четные числа :[${evenNumb}]  Нечетные числа:[${oddsNumb}] `);
/** 
 * 3,4,5,6 Задание
 * Создайте массив содержащий объекты user, со свойствами age, number, city
 * Добавьте новый элемент в конец массива и выведите обновленный массив.
 * Удалите первый элемент из массива и выведите обновленный массив.
 *  Используя метод `join()`, объедините все элементы массива в одну строку, разделенную запятой.
  */
let user_2 = ["age", "number", "city"];
user_2.push("name_2"); //добавление нового элемента в конец
console.log(`${user_2}`);
user_2.shift(); // удаление первого элемента
console.log(`${user_2}`);
console.log(`${user_2.join()}`); // объединение элементов в одну троку
/**
 * 7 Задание
 * Проверьте, содержит ли массив определенный элемент, и выведите соответствующее сообщение.
 * */
const success = (element) => element === "city";
console.log(user_2.some(success));
