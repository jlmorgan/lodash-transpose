# lodash-transpose [![Build Status](https://travis-ci.org/jlmorgan/lodash-transpose.svg)](https://travis-ci.org/jlmorgan/lodash-transpose)

> Adds matrix transpose functionality to lodash.

## Usage

```javascript
var _ = require("lodash-transpose"); // Includes lodash

var matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

_.isMatrix(matrix); // => true
_.transpose(matrix); // => [[1, 4], [2, 5], [3, 6]]
```
