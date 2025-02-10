'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y';
let b = 'x';
let t = '';

console.log(a, b, t);

t = a;
a = b;
b = t;

console.log(a, b, t);

// what did you do in this program?
//I swaped the value of a and b using the variable t

// what are the final values of `a` and `b`?
// The final value of `a` is "x", and the final value of `b` is "y"

// how are they changed from the initial values
// We used the variable t as an empty container to save the value of variable a
// We assign the value of variable b to the variable a,
// and assign the value of variable t (which variable a was previously assigned) to vriable b.

// is it possible to swap a and b without using t?
// yes, we could use Arithmetic Operators. https://medium.com/@maxjerry0107/swapping-variables-without-a-temporary-variable-in-javascript-a-clever-approach-01c656d38d21#:~:text=Swapping%20variables%20without%20a%20temporary%20variable%20is%20a%20neat%20and,operator%2C%20or%20the%20spread%20operator.
