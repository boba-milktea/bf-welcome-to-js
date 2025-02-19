'use strict';

/*
  refactor this program to use a `while` loop instead of a `for-of` loop
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';

let i = 0;

//i is the index, if i is less than the length of the string, we loop the code
while (i < phrase.length) {
  // next will be looping the character in the phrase
  const next = phrase[i];
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
    previous = next;
  }
  i++;
}

alert(noRepetitions);
