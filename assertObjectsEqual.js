const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  // check if objects are equal based on eqObjects function
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} === ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;