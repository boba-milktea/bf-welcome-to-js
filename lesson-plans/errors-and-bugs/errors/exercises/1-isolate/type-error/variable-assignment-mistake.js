

'use strict';

console.log('--- in execution phase ---');


/*
  environment:

  name:SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Invalid left-hand

  location: at evaller.onload (study-with.js:63:34)

  life cycle: creation phase 

  the mistake: the assignment is wrong 

  the fix(es): isHappy = true; 
*/

let isHappy = false;

isHappy = true;

console.log(isHappy); 


