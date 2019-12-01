'use strict';

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число', '');
    const number = Number(input);

    if (Number.isNaN(number)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    numbers.push(number);
} while (input !== null || input === '');

for (let number of numbers) {
    total += number;
}

if (total == 0) {
    alert('Отменено пользователем');
} else {
    alert(`Общая сумма чисел равна ${total}`);
}