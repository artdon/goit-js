"use strict";

function task3() {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  const userInput = prompt(`Enter your password`);

  if (userInput === null) {
    message = "Отменено пользователем!";
  } else if (userInput === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }

  console.log(message);
}
