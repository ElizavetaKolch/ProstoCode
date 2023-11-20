// структруа задачи
const taskData = {
    id: 700,
      title: 'Имя задачи',
      description: 'Описание задачи',
      isComplete: false
  }
// контейнер для задач
const taskItem=document.querySelector('.task-container')

// контейнер для одной задачи
const task = document.createElement('div')
task.classList='item'

// контейнер для описания задач
const info =  document.createElement('div')
info.classList = 'info'

const complete= document.createElement('input')

complete.classList = 'complete'
complete.type='checkbox'
complete.id=`${taskData.id}`
complete.name=`${taskData.id}`
complete.checked= `${taskData.isComplete}`


const title= document.createElement('h3')
title.classList='title'
title.textContent =`${taskData.title}`

const description = document.createElement('p')
description.classList='description'
description.textContent =`${taskData.description}`

// в контейнер для описания задач добавляем заголовок и описание
info.append(title, description)
//  в общий контейнер задач добавляем чекбокс и блок с описанием
task.append(complete, info)

// в контейнер всех задач добавляем одну задачу
taskItem.append(task)


