'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

let text = null;

while (!text || text === ' ') {
  text = prompt('enter some text, the letters will be bouncified');
  text === ' ' ? alert('no empty input, try again.') : null;
  text === null ? alert('there is no escape!') : null;
}

let pattern = /([A-Za-z])/;
let message = '';
let isUpperCase = true;

for (let i = 0; i < text.length; i++) {
  if (pattern.test(text[i])) {
    if (isUpperCase) {
      message += text[i].toUpperCase();
    } else {
      message += text[i].toLowerCase();
    }
    isUpperCase = !isUpperCase;
  } else {
    message += text[i];
  }
}

alert(message);
