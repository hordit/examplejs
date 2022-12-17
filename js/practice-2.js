// example 1

// let message = prompt('Какое офицеальное название JavaScript?');

// if (message === 'ECMAScript') {
//     message = 'Верно!';
// } else {
//     message = 'Не знаете? ECMAScript!';
// }
// console.log(message);

// example 2

// const hours = 14;
// const minutes = 0;
// let timeString;

// if (minutes > 0) {
//     timeString = `${hours} ч. ${minutes} мин.`;
// } else {
//     timeString = `${hours} ч.`;
// }
// console.log(timeString);

// example 3

// const userInput = prompt('Введите число');
// let message;

// if (userInput > 0) {
//     message = 'Это положительное число';
// } else if (userInput == 0) {
//     message = 'Это ноль';
// } else {
//     message = 'Это отрицательное число';
// }

// console.log(message);

// example 4

// const a = 120;
// const b = 180;
// let type;

// if (a > 100 && b > 100) {
//     type = Math.max(a, b);
// } else {
//     type = b + 512;
// }
// console.log(type);

// example 5

// let link = 'https://my-stile.com/about';

// if (!link.endsWith('/')) {
//     link = 'https://my-stile.com/about/';
// } else {
//     link += '/';
// }
 
// console.log(link);

// example 6

// let link = 'https://somesite.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//     link += '/';
// } 

// console.log(link);

// example 7

// const a = 120;
// const b = 180;

// const type = a > 100 && b > 100 ? Math.max(a, b) : b + 512;

// console.log(type);

// example 8

// const hours = 10;
// let type;

// if (hours < 17) {
//     type = 'Pending';
// } else if (hours >= 17 && hours <= 24) {
//     type = 'Expires';
// } else {
//     type = 'Overdue';
// }
// console.log(type);


// example 9

// const daysUntilLine = 5;
// let dayTime;

// if (daysUntilLine === 0) {
//     dayTime = 'Сегодня';
// } else if (daysUntilLine === 1) {
//     dayTime = 'Завтра';
// } else if (daysUntilLine === 2) {
//     dayTime = 'Послезавтра';
// } else {
//     dayTime = 'Дата в будущем';
// }

// console.log(dayTime);


// example 10

// let link = 'https://my-site.com/about';

// switch (link) {
//     case link.endsWith('/'):
//         link = 'https://my-site.com/about/';
//         break;
//     case !link.endsWith('/'):
//         link += '/';
//         break;
//     default:
//         console.log('https://my-site.com/about/');
// }

// example 11

// const max = 100;
// const min = 20;
 
// for (let i = min; i <= max; i += 1) {
//     if (i % 5 !== 0) {
//         continue;
//     }
//     console.log(i);
// }


// example 12

// let userName = prompt('Введите логин', '');

// if (userName === 'Админ') {

//     let pass = prompt('Введите пароль', '');
    
//     if (pass === 'Я Админ') {
//         console.log('Здравствуйте!');
//     } else {
//         console.log('Неверный пароль');
//     }

// } else if (userName === '' || userName === null) {
//   console.log('Отменено');
// } else {
// console.log('Я вас не знаю');
// }


