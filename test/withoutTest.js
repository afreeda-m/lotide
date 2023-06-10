const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without')


const words = ["hello", "world", "lighthouse"];
const arr = without(words, ['world']);
assertArraysEqual(arr, ["hello", "lighthouse"]);

const moreWordsToTest = ["a", "e", "i", "o", "u", "y"];
const arrWithout = without(moreWordsToTest, ['a', 'e', 'i', 'o'])
assertArraysEqual(arrWithout, ["u", "y"]);