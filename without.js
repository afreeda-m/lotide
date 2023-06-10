// Generate a new array without the items that need to be removed
const without = function(source, itemsToRemove) {
  // if source array is empty, nothing to remove so return undefined
  if (source === [] || source === ""){
    return undefined;
  }

  // initiate an empty array
  let newArr = [];
  
  //loop through source array to see if any elements are in the itemsToRemove array, if so, ignore, else push element into new array
  for (let i = 0; i < source.length; i++){
    if (!itemsToRemove.includes(source[i])){
      newArr.push(source[i]);
    }
  }
  // return the final array
  return newArr;
}

module.exports = without;