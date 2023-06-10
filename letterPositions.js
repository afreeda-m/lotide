const letterPositions = function(sentence) {
  // initiate an empty object to keep track of index of each character in string
  const results = {};

  // loop through the string to get each character
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    
    // skip spaces
    if (char === ' ') {
      continue;
    } else {
      // if character is in the results object, push the index number to the existing indices
      if (results[char]) {
        results[char].push(i);
      } else {
        // else, clear a new key for the char and put the current index as value
        results[char] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;