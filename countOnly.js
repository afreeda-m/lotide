// function which returns the count of the number of times an item appears in an array
const countOnly = function(allItems, itemsToCount) {
  //initialize an empty object
  const results = {};

  //loop through all the items in the array
  for (const item of allItems) {
    // check if the item in the array is in the array of items to count
    if (itemsToCount[item]) {
      // if item in the array of items to count is in the results, increment count by 1
      if (results[item]) {
        results[item] += 1;
      } else {
        //if item is not in the results object, create a key of the item and set count to 1
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;