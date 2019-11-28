"use strict";

function task6() {
  let input = null;
  let total = 0;

  do {
    input = prompt("Введите число");
    let numberInput = Number(input);
    if (isNaN(numberInput)) {
      alert("Введите число!");
    } else {
      total += numberInput;
    }
  } while (input !== null);

  console.log(`Общая сума чисел ${total}`);
}
