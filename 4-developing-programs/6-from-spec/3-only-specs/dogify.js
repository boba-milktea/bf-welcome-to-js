// #todo

'use strict';

/* Dogify

  A user can input some text and all "d"s will be replaced with "dog".
    - given the user cancels:
        they are prompted again
    - given their input has any lower case "d"s:
        all "d"s are replaced with "dog"
    - given their input has any upper case "D"s:
        all "D"s are replaced with "DOG"
    - given their input has any upper & lower case "d"s:
        all "d"s are replaced with "dog"
        and all "D"s are replaced with "DOG"

  test cases:
    contains no "d"s:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
    contains lower case "d"s:
      'd'           ->  'dog'
      'toad'        ->  'toadog'
      'disk'        ->  'dogisk'
      'Iddam'       ->  'Idogdogam'
    contains upper case "d"s:
      'D'           ->  'DOG'
      'ToaD'        ->  'ToaDOG'
      'Disk'        ->  'DOGisk'
      'iDDam'       ->  'iDOGDOGam'
    contains both upper and lower "d"s:
      'dD'          ->  'dogDOG'
      'Do dump'     ->  'DOGo dogump'
      'dim mooD'    -> 'dogim mooDOG'
*/


let input = prompt ("please enter something"); 

while (input === null) {
 input = prompt ("please enter something"); 
}; 



if (input.includes('d')) {
  input = input.replace("d", "dog"); 
} else if (input.includes('D')) {
   input = input.replace("D", "DOG"); 
} else if (input.includes("D") || input.includes("d")) {
   input = input.relace("d", "dog"); 
   input = input.replace("D", "DOG"); 
} else {
   input = input; 
}

alert(input); 