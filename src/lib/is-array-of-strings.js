'use strict';

/**
 * @module isArrayOfStrings
 */

/**
 * Filters an array of items, removing all elements for which the `testFn` function
 * returns a "truthy" value (literally `true` or a value that evaluates to `true`).
 *
 * @param arr {Array} the array to filter
 * @param testFn {function} a function that returns a "truthy" value for the items you
 * want to reject from the Array
 * @return {Array} the filtered array
 */
module.exports = function(arr) {
   function reducer(memo, item) {
      return memo && typeof item === 'string';
   }

   return Array.isArray(arr) && arr.reduce(reducer, true);
};
