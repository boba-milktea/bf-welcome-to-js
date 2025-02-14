import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('skippable', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const index = readNumber('skip-size');
  const text = readString('phrase');
  let output = '';
  // --- skip characters ---
  if (index && text) {
    for (let i = 0; i < text.length; i++) {
      if (i % index !== 0) {
        output += text[i];
      }
    }
  }

  // --- display the result ---
  displayString('skipped', output);
});
