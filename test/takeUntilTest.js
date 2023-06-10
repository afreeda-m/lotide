const eqArray = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === 'to'), ["I've", 'been']);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === 'Hollywood'), ["I've", 'been', 'to']);
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x > 5), [1, 2, 5]);