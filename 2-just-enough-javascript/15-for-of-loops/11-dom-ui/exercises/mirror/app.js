import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const input = readString('to-mirror');

  // --- mirror the text ---
  const output = input.split('').reverse().join('');
  const result = `${output} | ${input}`;

  // --- display the result ---
  displayString('output', result);
});
