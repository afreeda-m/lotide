//find and return the middle elements of an array
const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);
  
  //return empty array if 2 or less elements given in an array
  if (length <= 2) {
    return [];
  }

  //return 2 middle elements for an even numbered array or 1 middle element for an odd numbered array
  if (length % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;