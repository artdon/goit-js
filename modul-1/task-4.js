"use strict";

const credits = 23580 ;
const pricePerDroid = 3000 ;
let message
const quantitydroid = prompt('Enter quantity droid') ;
const totalprice = quantitydroid * pricePerDroid ;
const lastcredit = credits - totalprice ;

if (quantitydroid === null) {
    message = 'Отменено пользователем!';} 
else if (totalprice > credits)
{
    message = 'Недостаточно средств на счету!';
}
else {
    message = `Вы купили ${quantitydroid} дроидов, на счету осталось ${lastcredit} кредитов.`}

alert(message);



<script src="task-1.js" type="module"></script>
<!-- <script src="task-2.js" type="module"></script>
<script src="task-3.js" type="module"></script>
<script src="task-4.js" type="module"></script> -->
<!-- <script src="./task-5.js" type="module"></script> -->
<!-- <script src="task-6.js" type="module"></script> -->
