// #todo

'use strict';

/*
  environment: chrome

  name: ReferenceError
  message:Cannot access 'tomatoes' before initialization

  callstack:at <anonymous>:20:13
    at evaller.onload (study-with.js:63:34)

  life cycle: execution 

  the mistake: initialization should before console

  the fix(es): move line 23 before 21
*/

let tomatoes = 'fresh';

console.log(tomatoes);


