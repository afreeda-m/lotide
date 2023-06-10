// function which returns an array of items upto, but not including specified item in the callback
const takeUntil = function(array, callback) {
  const results = [];

  // loop through the array and check if item is in callback
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  //return the results array
  return results;
};

module.exports = takeUntil;