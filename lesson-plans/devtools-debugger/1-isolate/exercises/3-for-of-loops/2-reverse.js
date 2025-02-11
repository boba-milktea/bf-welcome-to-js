'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let backToNormal = ''; 
for (let nextChar of toReverse) {
  backToNormal = backToNormal + nextChar; 
}

let transformation = toReverse + ' -> ' + backwards + ' -> ' + backToNormal;

//personally, I prefer the answer below
// let transformation = toReverse + ' -> ' + backwards + ' -> ' + toReverse;

alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
