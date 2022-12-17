// const stars = 3;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва нет');
// }

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
    
//     default:
//       console.log('Такого кол-ва звезд нет');  
// }

// console.log(price);


// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
    
//     default:
//       console.log('Такого кол-ва звезд нет');  
// }

// console.log(price);

// const option = 8;
// let message = '';

// switch (option) {
//     case 1:
//         message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//         break;
//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//         break;
//     case 3:
//         message = 'Посылка будет отправлена сегодня';
//         break;
    
//     default:
//       message = 'Вам перезвонит менеджер';  
// }

// console.log(message);

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }
// console.log('qweqwe');

// for (let i = 5; i >= 0; i -= 2) {
//     console.log(i);
// }

// 1.Сделать вары 
// 2.Перебрать работникав в цикле
// 3.Сгенерить случайную зарплату
// 4.Прибавить к тоталу
// 5.Лог

// 1.Сделать вары 
// const employees = 12;
// const minSalary = 500;
// const maxSalary = 5000
// let totalSalary = 0;

// // 2.Перебрать работникав в цикле
// for (let i = 0; i < employees; i += 1) {
//  // 3.Сгенерить случайную зарплату
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//     console.log(`ЗП работника номер ${i} - ${salary} `);
// // 4.Прибавить к тоталу
//     totalSalary += salary;
// }

// // 5.Лог
// console.log('totalSalary: ', totalSalary);

// 1 Вары
// const min = 10;
// const max = 50;
// let total = 0;

// //фор от min до max с шагом в 1 
// for (let i = min; i <= max; i += 1){
// // Проверяем остаток от деления
//     if (i % 2 !== 0) {
//         // console.log('не четное: ', i);
//         continue;
//     }     
// // Пишем  в сумму
//     console.log('четное: ', i);
//         total += i;
// }

// console.log('total: ', total);


