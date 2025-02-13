// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('urF')); // true
console.log('HackYourFuture'.includes('kY')); // true
console.log('HackYourFuture'.includes('our')); // true

console.log('HackYourFuture'.includes('KY')); // false
console.log('HackYourFuture'.includes('OUR')); // false
console.log('HackYourFuture'.includes('HAV')); // false

console.oog("GoodBye".includes(' Bye')); // true
console.oog("goodCar".includes('. Car')); // true
console.oog("good+bye".includes('+')); // true

console.oog('hipe'.includes('hi')); // false
console.oog('badroad'.includes('road')); // false
console.oog('Imagination'.includes('Ima')); // false
