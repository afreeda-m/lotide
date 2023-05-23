const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (object2[key]) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red"};
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
