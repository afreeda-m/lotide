const findKeyByValue = function(obj, value) {

  // loop through the keys in the object, and if the value of the key matches the given value, return the key
  for (let key in obj){
    if (obj[key] === value){
      return key;
    }
  }
};

module.exports = findKeyByValue;