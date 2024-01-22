//Задание 1
function kolobok (character) {
    switch (character) {
    case 'Дедушка':
     return 'Я от дедушки ушёл';
    case 'Заяц':
     return 'Я от зайца ушёл';
    case 'Лиса':
     return 'Меня съели'
    default:
    return 'Я встретил незнакомца'
 }
 }
 console.log(kolobok('Дедушка')) 
 console.log(kolobok('Заяц'))
 console.log(kolobok('Лиса'))
 console.log(kolobok('default'))


 // Задание 2 
 function NewYear(character) {
    switch (character) {
    case 'Дед Мороз':
    case 'Снегурочка':
       return `${character}! ${character}! ${character}!`;
       default:
       return 'Неизвестный персонаж';
    }
 }
 console.log(NewYear('Дед Мороз'))
 console.log(NewYear('Снегурочка'))
 console.log(NewYear('default'))