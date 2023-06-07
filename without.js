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

const without = function(source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    let found = false;

    for (let y = 0; y < itemsToRemove.length; y++) {
      if (itemsToRemove[y] === source[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      newArr.push(source[i]);
    }
  }
  return newArr;

};

module.exports = without;

console.log(without([1, 2, 3],[1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));

const words = ["hello", "world", "lighthouse"];
const arr = without(words, ['world']);
console.log(arr);
assertArraysEqual(arr, ["hello", "lighthouse"]);

const moreWordsToTest = ["a", "e", "i", "o", "u", "y"];
const arrWithout = without(moreWordsToTest, ['a', 'e', 'i', 'o'])
console.log(arrWithout);
assertArraysEqual(arrWithout, ["u", "y"]);