"use strict";

function checkForSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('spam') || lowerStr.includes('sale');
  }


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true