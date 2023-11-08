/**Создать цикл, который выводит числа от 1 до 10 включительно. */
console.log("1 ЗАДАНИЕ");
let i = 1;
for (i = 1; i <= 10; i++) {
  console.log(i);
}
/**Написать цикл, который выводит только четные числа от 1 до 20. */
console.log("2 ЗАДАНИЕ");
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/**Реализовать цикл, который выводит таблицу умножения для числа 5. */
console.log("3 ЗАДАНИЕ");
for (i = 1; i <= 10; i++) {
  let result = 0;
  result = i * 5;
  console.log(result);
}

/**Написать функцию, которая считает сумму всех чисел от 1 до 100. */
console.log("4 ЗАДАНИЕ");
function summ(n) {
  let result = 0;
  for (let counter = 1; counter <= n; counter++) {
    const sum = counter + result;
    console.log(`${counter} + ${result} = ${sum}`);
    result += counter;
  }
}
summ(150)
