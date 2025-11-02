# Pascal's Triangle

Pascal's triangle is a mathematical phenomenon with many interesting, and useful properties. Each entry is, not only the sum of the two entries above it, but also represent the binary coefficients:

![](pascal.svg)

where n is the row (starting from 0) and k is the position of this number in the nth row (starting from 0, left to right).


You will be implementing a function called `GeneratePascal(n)`, which has a parameter which is the the number of rows to generate.


Given `GeneratePascal(5)`, the following triangle would be computed.

```
     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1
1 5 10 10 5 1
```

Each row will be represented as an array. Your return value for `GeneratePascal` will be an arrow containing all rows generated.



Sources: http://www.mathsisfun.com/pascals-triangle.html

https://en.wikipedia.org/wiki/Pascal%27s_triangle
