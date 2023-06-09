const head = function(arr) {
  if (arr === [] || arr === ''){
    return undefined;
  }
  return arr[0];
};

module.exports = head;