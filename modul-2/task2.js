"use strict";

const calculatePrice = function(string, costPerWord) {
  let total = 0;
  const words = string.split(" ");

  for (const word of words) {
    total += costPerWord;
  }
  return total;
};

console.log(calculatePrice("Donec orci lectus aliquam est", 40)); // 200

console.log(calculatePrice("Donec orci lectus aliquam est", 20)); // 100
