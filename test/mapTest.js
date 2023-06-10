const eqArray = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word.slice(-1));
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(results3, ['d', 'l', 'o', 'r', 'm']);