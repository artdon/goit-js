"use strict";
let constlogItems;
let logItems;
let number = 0;

constlogItems = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
logItems = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] ;


function setNumber(){
    for ( let i = 0 ; i < constlogItems.length ; i +=1 )
    
    console.log(`${i+1} - ${constlogItems[i]}`);
}

setNumber();

function setLogItems() {
    for ( let i = 0 ; i < logItems.length ; i +=1 )
    
    console.log(`${i+1} - ${logItems[i]}`);
}

setLogItems();