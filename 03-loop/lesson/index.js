/*Написать цикл, который выводит все числа от 1 до 10.  - whcounterle do*/
console.log("1 Задание");
let counter = 1;

while (counter < 11) {
  console.log(counter);
  counter = counter + 1;
}

/*Написать цикл, который выводит все четные числа от 1 до 100. - do whcounterle*/

console.log("2 Задание");

counter = 1;

do {
  if (counter % 2 == 0) {
    console.log(counter);
  }
  counter = counter + 1;
} while (counter <= 100);

console.log("3 Задание");

/*Написать цикл, который выводит все числа от 100 до 1 (в обратном порядке). for*/

for (counter = 100; counter > 0; counter--) {
  console.log(counter);
}

console.log("4 Задание");

/*Написать цикл, который выполняется 20 раз, каждую итерацию выводится сообщение на экран - число ${число} - ${чётное / нечётное} ,
 т.е, внутри цикла сперва необходимо определить является ли число чётным или нет - for*/

for (let counter = 0; counter < 21; counter++) {
  if (counter % 2 == 0) {
    console.log(`число - ${counter} - четное`);
  } else {
    console.log(`число - ${counter} - нечетное`);
  }
}
console.log("5 Задание");

let result = 0;
for (let counter = 1; counter <= 100; counter++) {
  const sum = counter + result;
  console.log(`${counter} + ${result} = ${sum}`);
  result += counter;
}

console.log("6 Задание");

/*Проект: калькулятор

1. Реализовать функцию `суммирования` калькулятора 
2. Реализовать функцию `вычитания` калькулятора 
3. Реализовать функцию `умножения` калькулятора
4. Реализовать функцию `деления` калькулятора*/
let calcResult = 0;

function calc_1(a, b) {
  let result = 0;
  result = a + b;
  console.log(`${a} + ${b} = ${result}`);
  return result;
}

function calc_2(a, b) {
  let result = 0;
  result = a - b;
  console.log(`${a} - ${b} = ${result}`);
  return result;
}

function calc_3(a, b) {
  let result = 0;
  result = a * b;
  console.log(`${a} * ${b} = ${result}`);
  return result;
}

function calc_4(a, b) {
  let result = 0;
  result = a / b;
  console.log(`${a} / ${b} = ${result}`);
  return result;
}
calcResult = calc_1(4, 1005);
calcResult = calc_2(calcResult, 100);
calcResult = calc_3(calcResult, 5);
calcResult = calc_4(calcResult, 2);
console.log(calcResult);

/*Напишите программу, в которой с помощью console. log выводятся все чис­ ла от 1 до 100 с двумя исключениями. 
Для чисел, кратных 3, вместо числа выводится "Fizz", а для чисел, кратных 5 (но не 3), - "Buzz". */

console.log("7 Задание");

for (counter = 1; counter <= 100; counter++) {
  if (counter % 3 == 0) {
    console.log("fizz");
  } else if (counter % 5 == 0 && counter % 3 != 0) {
    console.log("buzz");
  } else {
    console.log(counter);
  }
}

/*Когда это заработает, измените программу так, чтобы она печатала "FizzBuzz" для чисел, 
которые делятся и на 3, и на 5 (и по-прежнему печатайте "Fizz" или "Buzz" для чисел, кратных только одному из них).*/

console.log("8 Задание");

for (counter = 1; counter <= 100; counter++) {
  if (counter % 5 == 0 && counter % 3 == 0) {
    console.log("fizzbuzz");
  } else if (counter % 5 == 0 && counter % 3 != 0) {
    console.log("buzz");
  } else if (counter % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(counter);
  }
}

console.log("9 Задание");
/*Если вы уже написали программу, которая генерирует этот узор, измените  size =8 и измените программу так,
 чтобы она работала для любого size, выводя сетку заданных ширины и высоты.*/
function setka(numberColumns, numberLine) {
  for (let i = 0; i < numberColumns; i++) {
    let line = "";
    for (let j = 0; j < numberLine; j++) {
      line += (i + j) % 2 ? "#" : " ";
    }

    console.log(line + "\n");
  }
}

setka(20, 20);
