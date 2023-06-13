# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @afreeda/lotide`

**Require it:**

`const _ = require('@afreeda/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(value1, value2)`: logs to the console whether two given values are the same
* `head(array)`: returns the first element of a given array
* `tail(array)`: returns every element except the first element in a given array in a form of an array
* `middle(array)`: returns an array of the middle elements of a given array
* `eqArrays(arr1, arr2)`: checks if two given arrays are equal
* `assertArraysEqual(arr1, arr2)`: assertion to check if two arrays are equal based on eqArrays()
* `without(arr, itemsToRemove)`: when given an original array and an array of items to be removed, returns a modified original array without elements that were removed
* `flatten(array)`: when given a nested array, returns a 1 dimensional array
* `countOnly(allItems, itemsToCount)`: returns the counts for a specific subset of those items in a given array
* `countLetters(string)`: returns an object of the number of times a character appears in a given string
* `letterPositions(sentence)`: returns an object with array values of the index number of each character in a given string
* `findKeyByValue(object, value)`: returns the key when given a value corresponding to that key
* `eqObjects(obj1, obj2)`: checks for equality of given objects
* `assertObjectsEqual(obj1, obj2)`: assertion to check for object equality using eqObects()
* `map(array, callback)`: given an array and a callback, the function will return a modified array based on the condition of the callback
* `takeUntil(array, callback)`: given an array and a callback, returns a new array of items up until a particular condition is met
* `findKey(object, callback)`: given an object and callback, the function will return the first key associated with the value from the callback
