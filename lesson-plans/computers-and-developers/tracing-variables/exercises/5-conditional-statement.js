'use strict';

// declare variable a and initialise the value as `Ewin`
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

// declare variable `b`
// read the variable `a`, the value is `Ewin` and concatenate it with 'Hello ' and  ', your name is '.
// the value `Hello Ewin, your name is ` is assigned to b
let b = 'Hello ' + a + ', your name is ';

// read the variable `a`, and check if the length of the value `Ewin` is longer than 4
if (a.length > 4) {
  // if the length of the value `Ewin` is longer than 4, then we assign the value - "Hello Ewin, your name is long." to `b` (which is false)
  b = b + 'long.';
} else if (a.length === 4) {
  // else if the length of the value `Ewin` is equal to 4, then we assign the value - "Hello Ewin, your name is perfect." to `b`(which is true)
  b = b + 'perfect.';
} else {
  // otherwise we assign the value - "Hello Ewin, your name is short." to `b` (which is false)
  b = b + 'short.';
}

// read the value - "Hello Ewin, your name is perfect." to `b`
console.log(b);
