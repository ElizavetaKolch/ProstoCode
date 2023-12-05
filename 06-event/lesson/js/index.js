const container = document.querySelector(".container");

const input = document.querySelector(".input");

// кнопки с цифрами
const numbersContainer = document.querySelector(".numbers");
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

// кнопки с операторами
const operatorsContainer = document.querySelector(".operators");
const operators = ["*", "/", "+", "-", "="];


/**
 * Функция создает html элемент с тэгом div
 * @param {*} value
 * @param {*} classList
 * @returns
 */

const createEl = (value, classList, callback) => {
  const element = document.createElement("div");

  element.textContent = `${value}`;
  if (classList) {
    element.classList = `${classList}`;
  }

  element.addEventListener("click", callback);

  element.addEventListener("click", function () {
    input.textContent = this.textContent;
  });

  console.log(classList);

  return element;
};

const numbersElements = numbers.map((element) =>
  createEl(element, "", function () {
    const currentValue = input.textContent;
    if (currentValue === "0") {
      input.textContent = this.textContent;
    } else {
      input.textContent = `${currentValue}${this.textContent}`;
    }
  })
);

numbersContainer.append(...numbersElements);

const operatorsElements = operators.map((element) =>
  createEl(element, "operator")
);

operatorsContainer.append(...operatorsElements);

