'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome

  name: reference error 
  message: welf is not defined 

  location: line 20

  life cycle: execution phase

  the mistake:no delcaration

  the fix(es): use const or let
*/

const welf = 'ingrad';

console.log(welf);
