const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  // if the number of keys do not match both objects, then objects cannot be equal
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }

  //  if number of keys are equal, then check that the key-value pairs are the same for both objects
  for (let key in object1) {
    if (object2[key]) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }

  //both objects are same if above conditions fail
  return true;
};

module.exports = eqObjects;