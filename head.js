// return the first element of a given array
const head = function(arr) {
  // empty arrays will return undefined
  if (arr === [] || arr === ''){
    return undefined;
  }
  return arr[0];
};

module.exports = head;