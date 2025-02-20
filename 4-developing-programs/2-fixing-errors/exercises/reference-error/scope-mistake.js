// #todo

'use strict';

/*
  environment:chrome

  name:ReferenceError
  message: isValidUserName is not defined

  callstack:at <anonymous>:29:57
    at evaller.onload (study-with.js:63:34)

  life cycle:execution 

  the mistake:isValidUserName declared after if function 

  the fix(es): declare and initialise isValidUserName first
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 4) {
  isValidUserName = true;
} else {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
