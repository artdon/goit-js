"use strict";
let inputmessage=prompt(`Enter you country`);
let cost ;
 

if (inputmessage !== null){
 inputmessage = inputmessage.toLowerCase();


    switch (inputmessage) {
        case 'китай':
        cost = 100 ;
        break ;

        case 'чили':
        cost = 250 ;
        break ;
     
        case "австралия":
        cost = 170 ;
        break ;

        case "индия":
        cost = 80;
        break ;

        case "ямайка":
        cost = 120 ;
        break ;

        default:
        alert(`В вашей стране доставка не доступна`);
 }
}
 else {
     alert(`Отменено пользователем!`);
 } 
 if (cost){
     alert(`Доставка в ${inputmessage} будет стоить ${cost} кредитов`);
 }
