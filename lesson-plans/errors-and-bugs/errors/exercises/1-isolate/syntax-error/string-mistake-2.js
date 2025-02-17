

'use strict';

console.log('--- in execution phase ---');


/*
  environment:chrome

  name:SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Unexpected string

  location: at evaller.onload (study-with.js:63:34)

  life cycle: creation phase

  the mistake: no concate sign 

  the fix(es): add plus
*/

const quotesInQuotes = 'remind yourself '+'i can do this!'+' at least once a day';


