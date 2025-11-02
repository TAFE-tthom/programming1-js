
# Array View

You have been tasked with implementing a function that will extract a segment from an existing array into a new array.

The function you need to implement is called `array_view`, it accepts 3 arguments which correspond to the parameters:

* `numsArray` - array that holds numbers

* `start` - Starting index of where the view begins

* `end` - End index where the view ends

Example Of Usage:

```js
let numsArray = [1, 2, 3, 4, 5, 6, 7, 8]
let res = array_view(numsArray, 2, 5);
// res is [3, 4, 5, 6]
  
```


## How to test

You can test your implementation using `npm test`, if you run into an error, please make sure you have installed the correct dependencies with `npm install`.
