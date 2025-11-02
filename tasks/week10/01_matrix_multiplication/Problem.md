# Matrix Multiplication

Matrix multiplication is a mathematical procedure that produces a resultant matrix from two input matrices.

Mathematically, the multiplication of A x B can be expressed as:

![](MatrixMath.svg)

where A is an n × m matrix and B is an m × p matrix. Graphically, this can be seen as:

![](MatrixImg.svg)

Your task is to implement the above operations in a function called `MatrixMultiplication`, this function will operate on two matrices that had been read in via standard input (test cases are handling the reading).


Example:

In
```js 
let result = MatrixMultiplication(
  [
    [5, 3, 10],
    [7, 9, 0]
  ],
  [
    [10, 2, 3, 8, 12],
    [7, 4, 11, 3, 6],
    [8, 8, 1, 14, 3]
  ]
);
/*
Result will be:
  [
    [151, 102, 58, 189, 108],
    [205, 122, 129, 209, 165]  
  ]
*/
```

You can assume all input will be given, and only integers will be used.

Source: https://en.wikipedia.org/wiki/Matrix_multiplication
