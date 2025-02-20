// #todo

'use strict';

/*
  environment:chrome

  name:ReferenceError
  message:Cannot access 'isValidUserName' before initialization

  callstack:  at <anonymous>:24:19
    at evaller.onload (study-with.js:63:34)

  life cycle: execution 

  the mistake: declaration of isValidUserName should move before the if 

  the fix(es): move the declaration 
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}



if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
