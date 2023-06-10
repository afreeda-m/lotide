// find a key in an object associated with the value given
const findKey = function(object, callback) {

  // loop through each key value pair and check if it matches the callback
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;