"use strict";

function task5() {
  const inputMessage = prompt(`Enter you country`).toLowerCase();
  let cost;

  if (inputmessage !== null) {
    switch (inputMessage) {
      case "китай":
        cost = 100;
        break;

      case "чили":
        cost = 250;
        break;

      case "австралия":
        cost = 170;
        break;

      case "индия":
        cost = 80;
        break;

      case "ямайка":
        cost = 120;
        break;

      default:
        console.log(`В вашей стране доставка не доступна`);
    }
  } else {
    alert(`Отменено пользователем!`);
  }
  if (cost) {
    console.log(`Доставка в ${inputmessage} будет стоить ${cost} кредитов`);
  }
}
