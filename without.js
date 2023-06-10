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

// Generate a new array without the items that need to be removed
const without = function(source, itemsToRemove) {
  // if source array is empty, nothing to remove so return undefined
  if (source === [] || source === ""){
    return undefined;
  }

  let newArr = [];
  
  //loop through source array to see if any elements are in the itemsToRemove array, if so, ignore, else push element into new array
  for (let i = 0; i < source.length; i++){
    if (!itemsToRemove.includes(source[i])){
      newArr.push(source[i]);
    }
  }
  return newArr;
}

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