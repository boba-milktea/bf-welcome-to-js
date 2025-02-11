// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firstName = readString('the-first-name');
  let secondName = readString('the-second-name');
  let name = `${firstName} ${secondName}`;
  console.log(name);

  // --- create a message ---

  let message = `
  Hello ${name}!
  Goodbye ${name}!`;

  // --- display the message ---

  displayString('greeting-output', message);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
