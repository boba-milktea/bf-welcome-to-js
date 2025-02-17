

'use strict';

console.log('--- in execution phase ---');



/*
  environment:chrome

  name: SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Unexpected number

  location: at evaller.onload (study-with.js:63:34)

  life cycle: creation phase 

  the mistake: 3 is a number, it can't be a variable 

  the fix(es): change the name of the variable
*/


const three = 'three';


