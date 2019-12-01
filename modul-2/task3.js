"use strict";


const arr1 = 'The quick brown fox jumped over the lazy dog'.split(' ');
let findLongestWord = "";
for(let i = 0; i<arr1.length; i++){
	if(findLongestWord.length<arr1[i].length) {
		findLongestWord = arr1[i];
	}
}

console.log(`${findLongestWord}`);

const arr2 = 'Google do a roll'.split(' ');
let findLongestWord2 = "";
for(let i = 0; i<arr2.length; i++){
	if(findLongestWord2.length<arr2[i].length) {
		findLongestWord2 = arr2[i];
	}
}
console.log(`${findLongestWord2}`);

const arr3 = 'May the force be with you'.split(' ');
let findLongestWord3 = "";
for (let i = 0; i<arr3.length; i++) {
	if(findLongestWord3.length<arr3[i].length) {
		findLongestWord3 = arr3 [i];
	}
}
console.log(`${findLongestWord3}`);




// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'


