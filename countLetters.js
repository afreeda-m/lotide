// function which counds the number of time a character appears in a string
const countLetters = function(string) {
  //initiate an empty object to keep track of each character
  const results = {};

  // loop through the string to get each character
  for (let char of string) {
    // skip spaces
    if (char === ' ') {
      continue;
    } else {
      // if character is already in the object, increment count by 1
      if (results[char]) {
        results[char] += 1;
      } else {
        // else, create a new key for the character and set value to 1
        results[char] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

// //Test cases:
// const result1 = countLetters('lighthouse in the house');
// console.log(result1);

// assertEqual(countLetters('lighthouse in the house')["h"], 4);
// assertEqual(countLetters('lighthouse in the house')["e"], 3);
// assertEqual(countLetters('LHL is the best!')["b"], 1);