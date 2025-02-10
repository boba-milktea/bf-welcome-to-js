'use strict';

/* Comment & Log

  Add comments and logs to help a developer understand this program

*/

// declare a let variable `first` and initialise `first` with 'Pieter'
let first = 'Pieter';

// declare a let variable `last` and initialise `last` with 'Rabbit'
let last = 'Rabbit';

// decalre a let variable `fullName`
// read the variable's value and the operator "+"" to concatenate the two values 'Pieter', 'Rabbit' and a space
// initialise `fullName` with the value - 'Pieter Rabbit'
let fullName = first + ' ' + last;

// read the value of `fullName` which is 'Pieter Rabbit'
console.log(fullName);

// decalre a let variable `greeting`
// read the variable - fullName's value which is 'Pieter Rabbit'
// the operator "+" will concatenate the string 'hello ' and 'Pieter Rabbit'
// initialise the variable `greeting` with the value 'hello Pieter Rabbit'
let greeting = 'hello ' + fullName;

// read the variable - fullName's value which is 'Pieter Rabbit'
// the operator "+" will concatenate the string 'good bye ' and 'Pieter Rabbit'
// assign the variable `greeting` with the value 'good bye Pieter Rabbit'
greeting = 'good bye ' + fullName;

// read the value of the variable `greeting` which should be 'good bye Pieter Rabbit'
console.log(greeting);
