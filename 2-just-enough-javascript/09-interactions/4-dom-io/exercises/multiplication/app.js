import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  // --- multiply the numbers ---
  const result = readNumber('left') * readNumber('right');
  // --- create a message ---
  const message = `Your result is ${result}`;
  console.log(message);
  // --- display the message ---
  displayString('product', message);
});
