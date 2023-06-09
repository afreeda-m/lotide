const flatten = function(arr) {
  if (arr === undefined){
    throw undefined;
  } else {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (let y = 0; y < arr[i].length; y++) {
          newArr.push(arr[i][y]);
        }
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
};

module.exports = flatten;

