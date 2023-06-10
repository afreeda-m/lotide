const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

//Test cases:
const result1 = countLetters('lighthouse in the house');
console.log(result1);

assertEqual(countLetters('lighthouse in the house')["h"], 4);
assertEqual(countLetters('lighthouse in the house')["e"], 3);
assertEqual(countLetters('LHL is the best!')["b"], 1);