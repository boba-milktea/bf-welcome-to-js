'use strict';

// declare and initialise the variable `a` with'*'
let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';

// declare and initialise the variable `b` with an empty string - ''
let b = '';

// while the length of variable `b` is shorter than the length of vriable `a`

while (b.length < a.length * 3) {
  // execute the code b = b + a, b = * / now b is 1, a is 1*3 = 3
  // execute the code b = b + a, b = ** / now b is 2, a is 3
  // execute the code b = b + a, b = ** / now b is 3, a is 3, as now b is not less than a, the code will stop executing.
  b = b + a;
}

// read b, the value should be ***
console.log(b);
