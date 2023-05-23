const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === ' ') {
      continue;
    } else {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

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
