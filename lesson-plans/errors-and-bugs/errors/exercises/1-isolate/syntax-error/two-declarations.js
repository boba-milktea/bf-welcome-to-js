'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name:SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Identifier 'tree' has already been declared

  location:at evaller.onload (study-with.js:63:34)

  life cycle: creation phase

  the mistake: two values assigned to the same varible 

  the fix(es): reassign the variable 
*/

let tree = 'oak';

tree = 'birch';
