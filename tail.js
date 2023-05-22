const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  const newArr = arr.slice(1, arr.length);
  return newArr;
};

//Test cases
//console.log(tail([1]));
//console.log(tail([]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


const result = tail(["Hello", "Lighthouse", "Labs", "bootcamp"]);
console.log(result);
assertEqual(result.length, 3);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[2], "bootcamp");

