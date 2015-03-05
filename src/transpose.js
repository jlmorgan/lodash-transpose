"use strict";

// Required node modules
var _ = require("lodash");

// Required files
var isMatrix = require("./isMatrix.js");
var map = _.map;

/**
 * Base matrix transpose. Turns an n by m matrix into m by n.
 * @private
 * @param {Array} matrix - Two-dimensional array (n by m).
 * @returns {Array} Returns m by n matrix.
 */
function baseTranspose(matrix) {
  return map(matrix[0], function (column, index) {
    return map(matrix, function (row) {
      return row[index];
    });
  });
}

/**
 * Transposes a two dimensional array (matrix) that is n by m into m by n.
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} matrix - Matrix to be transposed.
 * @returns {Array} Returns m by n matrix.
 * @example
 *
 * _.transpose([[1, 2, 3], [4, 5, 6]]);
 * // => [[1, 4], [2, 5], [3, 6]]
 */
function transpose(matrix) {
  return isMatrix(matrix) ? baseTranspose(matrix) : matrix;
}

module.exports = transpose;
