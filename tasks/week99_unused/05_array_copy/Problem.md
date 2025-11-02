
# Array Copy

You have been tasked with writing the function `arrayCopy` that will copy contents from an array (`src`) to another array (`dest`).

There are two additional parameters, `start` and `length`.

* `start` indicates the starting point from where we are copying from,

* `length` indicate the number of elements we are copying from (`src`).

* If `start` or `length` are negative values or are outside of the boundaries of `src`, a copy should not take place.


```js
function arrayCopy(dest, src, start, length)
```

Lets walk through some examples.

Example 1:

```js
let src =  [1, 2, 3, 4, 5, 6];
let dest = [0, 0, 0, 0, 0, 0];

arrayCopy(dest, src, 1, 3); //dest should be [2, 3, 4, 0, 0, 0];
```

Example 2:

```js
let src =  [1, 2, 3, 4, 5, 6];
let dest = [0, 0, 0, 0, 0, 0];

arrayCopy(dest, src, 2, 1); //dest should be [3, 0, 0, 0, 0, 0];
```

Example 3:

```js
let src =  [1, 2, 3, 4, 5, 6];
let dest = [0, 0, 0, 0, 0, 0];

arrayCopy(dest, src, 0, 6); //dest should be [1, 2, 3, 4, 5, 6];
arrayCopy(dest, src, 4, 2); //dest should be [5, 6, 3, 4, 5, 6];
```


## How to test

You can test your solution using `npm test`, make sure you install the appropriate dependencies using `npm install`.
