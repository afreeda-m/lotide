const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const result = letterPositions("LHL rocks!");
console.log(result);

const test1 = letterPositions('hello');
// h: [0], e: [1], l: [2, 3], o: [4]
assertArraysEqual(test1['h'], [0]);
assertArraysEqual(test1['e'], [1]);
assertArraysEqual(test1['l'], [2, 3]);
assertArraysEqual(test1['o'], [4]);

const test2 = letterPositions('LHL rocks!');
// L: [0, 2], H: [1], r: [4], o: [5], c: [6], k: [7], s: [8], '!': [9]
assertArraysEqual(test2['L'], [0, 2]);
assertArraysEqual(test2['H'], [1]);
assertArraysEqual(test2['r'], [4]);
assertArraysEqual(test2['o'], [5]);
assertArraysEqual(test2['c'], [6]);
assertArraysEqual(test2['k'], [7]);
assertArraysEqual(test2['s'], [8]);
assertArraysEqual(test2['!'], [9]);
