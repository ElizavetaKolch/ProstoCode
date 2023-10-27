//1 задание
'Привет' + 'Друг' == !null // разные значения
'Привет' + 'Друг' === !null // разные типы данных 
console.log('Привет' == !null) 
console.log('Привет' === !null)      
//2 задание
const ten = 10; 
const hundred = 100;
const thousand = 1000;

console.log((ten * ten + hundred) * hundred >= thousand * ten )

/* 
    ten*ten=100
    100 + hunred=200
    200 * hundred=20 000
    
    thousand * ten= 10 000
    
    20 000 >= 10 000 = true      */

//3 задание

console.log(6 > 4 && 10 < 5) // false // true && false = false
console.log((30 + 4) > (7 ** 2)) // false // 34>49=false
console.log(false && null) //null
console.log(!('hi' + 'hi') && true) //false 
console.log(!('hi' + 'hi') && false) //false
