
# Locations of Characters


You have been tasked with implementing the function `locationOfCharacters`, the implementation requires identifying all indexes that a character is located in an array. Please update the function `locationOfCharacters` in `characters.js`.

```js
function locationOfCharacters(line, ch)
```

* The `line` parameter will represent a string of characters.

* The `ch` parameter will represent a character that is to be found within the `line` itself.

## Implementation Details

The implementation of `locationOfCharacters` will return an array of indexes which relate to the location of `ch` within `line`.

* If `line` does not contain `ch` anywhere, the function will return an empty array.

* If `line` contains `ch` in one or more locations, it will return an array with one or many indexes (depends on how many times `ch` has been matched).

* When matching the character, you should consider it to be case-sensitive. As in, `L` and `l` are considered different characters.

* If either `line` or `ch` has a length of 0, the function will return an empty array.

Example Of Usage 1:

```js

let someLine = "Hello World";
let findCh = 'l';

let result = locationOfCharacters(someLine, findCh); // [2, 3, 9]
```

Example Of Usage 2:

```js

let someLine = "Javascript is fun!";
let findCh = 'p';

let result = locationOfCharacters(someLine, findCh); // [8]
```

Example Of Usage 3:

```js

let someLine = "Software Engineering";
let findCh = 'z';

let result = locationOfCharacters(someLine, findCh); // []
```


## How to test

You can test your implementation against the test cases by running `npm test`. Make sure you install the depedencies (`npm install`) before you testing your solution.
