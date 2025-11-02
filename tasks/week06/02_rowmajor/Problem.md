# Row Major Order

You are to construct your own integer array type. This is called a `RowMajorArray`, the idea behind this array is that it accepts a 1D array which can be interpreted as a 2D array. It will access it elements using row-major order.

Your class must implement the following:

* `constructor(elementsPerRow, rows)` - Constructor for the `RowMajorArray` class

* `getElement(x, y)` - Retrieves an element from the array using x, y coordinates. Given an array where there are 3 rows and 10 elements per a row, calling `getElement(5, 1)` will get the element at index `15`.
* `setElement(x, y, v)` - Sets ane element at x, y coordinates to v.

* `getArray()` - Gets the array that is used.


Refer to `Row- and column-major order` link from [wikipedia](https://en.wikipedia.org/wiki/Row-_and_column-major_order)

## Running Tests

You can test your implementation against the unit tests associated with this project. Use the command `npm test` to execute the test cases.
