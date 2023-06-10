// modify a given array based on the callback
const map = function(array, callback) {
  const results = [];

  // loop through the array and send items to callback to be modified and push the return item to a new array
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;