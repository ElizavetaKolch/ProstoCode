// структруа задачи
const taskData = [
  {
    id: 1,
    title: "Gobernador Gálvez",
    description: "807 Memorial Street",
    isComplete: true,
  },
  {
    id: 2,
    title: "Cilegi",
    description: "00 Arkansas Trail",
    isComplete: false,
  },
  {
    id: 3,
    title: "Santa Rita Aplaya",
    description: "63 Hazelcrest Street",
    isComplete: true,
  },
  {
    id: 4,
    title: "Nzérékoré",
    description: "8207 Straubel Crossing",
    isComplete: true,
  },
  {
    id: 5,
    title: "Sloboda",
    description: "51971 Little Fleur Terrace",
    isComplete: false,
  },
  {
    id: 6,
    title: "Monastir",
    description: "3340 Little Fleur Drive",
    isComplete: false,
  },
  {
    id: 7,
    title: "Cirateun",
    description: "161 Victoria Place",
    isComplete: false,
  },
  { id: 8, title: "Maxu", description: "421 Barby Park", isComplete: false },
  {
    id: 9,
    title: "Illéla",
    description: "41248 Banding Plaza",
    isComplete: true,
  },
  {
    id: 10,
    title: "Tomas",
    description: "5 Thierer Terrace",
    isComplete: false,
  },
];

// контейнер для задач
const taskItem = document.querySelector(".task-container");

/**
 * Функция создает чекбокс
 * @param {*} id
 * @param {*} isComplete
 */
const createCheckbox = (id, isComplete) => {
  const complete = document.createElement("input");

  complete.classList = "complete";
  complete.type = "checkbox";
  complete.id = `${id}`;
  complete.name = `${id}`;
  complete.checked = isComplete;

  return complete;
};

/**
 * Функция отвечает за создание элемнта описания задач
 * @param {*} title
 * @param {*} description
 */
const createInfo = (title, description) => {
  const info = document.createElement("div");
  info.classList = "info";

  const titleEl = document.createElement("h3");
  titleEl.classList = "title";
  titleEl.textContent = `${title}`;

  const descriptionEl = document.createElement("p");
  descriptionEl.classList = "description";
  descriptionEl.textContent = `${description}`;

  // в контейнер для описания задач добавляем заголовок и описание
  info.append(titleEl, descriptionEl);
  return info;
};

//  в общий контейнер задач добавляем чекбокс и блок с описанием

const createTask = (task) => {
  // контейнер для одной задачи
  const taskEl = document.createElement("div");
  taskEl.classList = "item";
  taskEl.append(
    createCheckbox(task.id, task.isComplete),
    createInfo(task.title, task.description)
  );
  return taskEl;
};
// в контейнер всех задач добавляем все задачу
taskData.forEach((task) => taskItem.append(createAnotherTask(task)));

function createAnotherTask(task) {
  const taskEl = document.createElement("div");

  const isChecked = task.isComplete ? 'checked' : ''

  const html = `<div class="item"><input class="complete" type="checkbox"
   id=${task.id} name=${task.id} ${isChecked}><div class="info"><h3 class="title">${task.title}</h3>
   <p class="description">${task.description}</p></div></div>`;

  taskEl.innerHTML = html;
  return taskEl;
}
