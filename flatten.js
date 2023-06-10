// destructure a nested array into a single linear array
const flatten = function(arr) {
  if (arr === undefined){
    throw undefined;
  } else {
    let newArr = [];
    
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
      // check if there is an array at an index i
      if (Array.isArray(arr[i])) {
        // push the values of the nested array into the singular array
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

