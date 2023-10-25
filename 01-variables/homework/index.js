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
    
    20 000 >= 10 000 = true                     */
