/*const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

const assertEqual = function(actual, expected) {

  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        return; // Exit the function immediately if a mismatch is found
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  const newArr = arr.slice(1, arr.length);
  return newArr;
};

//Test cases
console.log(tail([1]));
console.log(tail([]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs", "bootcamp"]);
console.log(result);

assertEqual(result, ["Lighthouse", "Labs", "bootcamp"]);

