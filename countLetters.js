const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};

  for (let char of string) {
    if (char === ' ') {
      continue;
    } else {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};

//Test cases:
const result1 = countLetters('lighthouse in the house');
console.log(result1);

assertEqual(countLetters('lighthouse in the house')["L"], 2);
assertEqual(countLetters('lighthouse in the house')["l"], 2);
assertEqual(countLetters('LHL is the best!')["b"], 1);
