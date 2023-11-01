/*Напишите программу, которая будет содержать переменную name c именем пользователя - имя любое,
 дальше напиши условную конструкцию if else, в условии будет произведена проверка на соответствие имени пользователя,
если имя соответствует, то выводим в консоль  Приветствую, {имя пользователя}, 
в противном случае выводить в консоль Вы еще не зарегистрированы. Зарегистроваться?, затем добавьте вторую переменную name2.
С другим именем, чтобы результат выполнения программы изменился */

const userName = 'Elizaveta'
const userName2 = 'Svetlana'

if(userName ==='Elizaveta'){
	console.log( `Приветствую, ${userName}`)
} else {
	console.log( `Вы еще не зарегистрированы. Зарегистроваться?`)
}

if(userName2 ==='Elizaveta'){
	console.log( `Приветствую, ${userName}`)
} else {
	console.log( `Вы еще не зарегистрированы. Зарегистроваться?`)
}

/*Напишите программу, которая будет проверять уровень здоровья персонажа (переменная - health), 
проверяем на несколько условий, если здоровье:
Уровень здоровья Сообщение
≥100             Вы здоровы
≤75              Не помешало бы подлечиться
≤50              Срочно надо подлечиться, уровень здоровья слишком низкий
= 0              Вы мертвы */

const health = 75;

switch (health) {
  case 100:
   console.log('Вы здоровы')
    break;
  case 75:
    console.log('Не помешало бы подлечиться')
    break;
  case 50:
    console.log('Срочно надо подлечиться, уровень здоровья слишком низкий')   
    break;
  case 0:
    console.log('Вы мертвы')   
    break;
	default: 
   // прочие условия
	break;
}


const health1 = 96;

if(health1 == 100){
	console.log('Вы здоровы' )
}   else if (health1 < 100 && health1 >= 75){
	console.log('Здоровы , но подлечитесь')
}   else if (health1 < 75 && health1 >= 50){
	console.log('Не помешало бы подлечиться')
}   else if (health1 < 50 && health1 > 0 ){
	console.log('Срочно надо подлечиться, уровень здоровья слишком низкий')
}   else if (health1 = 0){
	console.log('Вы мертвы')
}   else {
    console.log(`Ваше здоровье:  ${health1}`)
}


 function getUser (userName) {
    if(userName ==='Elizaveta'){
        console.log( `Приветствую, ${userName}`)
    } else {
        console.log( `Вы еще не зарегистрированы. Зарегистроваться?`)
    }
}

getUser('Svetlana')

const checkHealth = (health1) => {
    if(health1 === 100){
        console.log('Вы здоровы' )
    }   else if (health1 < 100 && health1 >= 75){
        console.log('Здоровы , но подлечитесь')
    }   else if (health1 < 75 && health1 >= 50){
        console.log('Не помешало бы подлечиться')
    }   else if (health1 < 50 && health1 > 0 ){
        console.log('Срочно надо подлечиться, уровень здоровья слишком низкий')
    }   else if (health1 = 0){
        console.log('Вы мертвы')
    }   else {
        console.log(`Ваше здоровье:  ${health1}`)
    }
}

checkHealth(100)