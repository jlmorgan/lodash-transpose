"use strict";

// Third Party
var stream = require("lodash");
var isArray = require("lodash/fp/isArray");
var isUndefined = require("lodash/fp/isUndefined");

/**
 * Get the length of a row.
 * @private
 * @param {Array} row - Array row.
 * @returns {Number} Returns length of the row array.
 */
function getRowLength(row) {
  return isArray(row) ? row.length : (isUndefined(row) ? 0 : 1);
}

/**
 * Base assertion of whether or not the specified matrix is in fact a matrix.
 * @private
 * @param {Array} matrix - Two-dimensional array (n by m).
 * @returns {Boolean} Returns true if array is also a matrix.
 */
function baseIsMatrix(matrix) {
  return stream(matrix).map(getRowLength).uniq().value().length === 1;
}

/**
 * Asserts whether or not the specified matrix is an array and a matrix.
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} matrix - Two-dimensional array (n by m).
 * @returns {Boolean} Returns true if array is also a matrix.
 * @example
 *
 * _.isMatrix([1]);
 * // => true
 *
 * _.isMatrix([[1, 2, 3], [4, 5, 6]]);
 * // => true
 *
 * _.isMatrix([]);
 * // => false
 *
 * _.isMatrix([[1, 2], [3, 4, 5]]);
 * // => false
 */
function isMatrix(matrix) {
  return isArray(matrix) && baseIsMatrix(matrix);
}

module.exports = isMatrix;
