
# Hailstone Numbers

Hailstone numbers is a pattern where given an integer number, that when a value is even, it is divided and the new value is used in the function, if the value is odd, the value is multiplied by 3 and 1 is added, the new value will be then used in the function again.

What is neat about this, is that given this pattern, that when given an positive integer that is greater than 1, the recursive function will execute until 1 is hit again.

Your task is to implement this function and demonstrate this case. You will also need to keep track of all the values being added.

```js
function hailstone(n) {

  return []; //hint on what to return
}
```

## How to test

You can test your implementation by running `npm test`, make sure you install the dependencies with `npm install`.
