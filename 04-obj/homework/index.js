

const createArray = (n) => {                            //создаем стрелочную функцию с аргументом n
    let array = [];                                     // создаем пустой массив
    
    for(let counter = 0; counter < n; counter++){       // счетчик для массива
        const value = Math.floor(Math.random() * 10);   // к переменной присваем рандомных 10 чисел //floor() округление значений в меньшую сторону

        array.push(value);                              // добавление в массив созданных рандомных значений
        
    }

    return array ;                                      // возврат массива
    
}

console.log(createArray(40))                                         // вызов функции с указанным аргументом

const user = {                                                       // создаем объект user
    age: 30,                                                         // имя и значения свойств объекта
    name: 'Angel',                                                   // имя и значения свойств объекта
    
    getInfo() {                                                      // метод, возвращающий имя и значение свойств объекта
        return `Имя: ${this.name} Возраст: ${this.age}`
    },
    changeName(name){                                                // метод, меняющий значение имени 
        this.name = name;                                            // ссылка на объект(контекст)
    },
    changeAge(age){                                                  // метод, меняющий знчаение возраста
        this.age = age;                                              // ссылка на объект(контекст)
    }

}

user.getInfo();                                                       // вызов метода

user.changeAge(40);                                                   // вызов метода
user.changeName('Pixel');                                             // вызов метода

user.getInfo();                                                       // вызов метода

console.log(user.getInfo())                                           // вывод в консоль с измененными данными
