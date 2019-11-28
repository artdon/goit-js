"use strict";

function task4() {
  const credits = 23580;
  const pricePerDroid = 3000;
  let message;
  const quantitydroid = prompt("Enter quantity droid");
  const totalprice = quantitydroid * pricePerDroid;
  const lastcredit = credits - totalprice;

  if (quantitydroid === null) {
    message = "Отменено пользователем!";
  } else if (totalprice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    message = `Вы купили ${quantitydroid} дроидов, на счету осталось ${lastcredit} кредитов.`;
  }

  console.log(message);
}
