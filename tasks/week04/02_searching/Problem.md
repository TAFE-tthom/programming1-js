
# Word Searcher

A common problem within programming is searching and it is best you get familiar with
implementing solutions to these problems. You have been tasked with implementing two
methods.

* `function findWord(words, word)`

The `findWord` method will search for a word within the array `words` and return it
if it is found. Otherwise, it will return null.

Example 1:
```
let words = ["one", "two"]
let found = findWord(words, 'one'); //'one'
  
```

Example 2:
```
let words = ["Jeff", "Alice", "Kelly"]
let found = findWord(words, 'Kelly'); //'Kelly'
  
```

Example 3:
```
let words = ["one", "two"]
let found = findWord(words, 'three'); // null
  
```

You will need to implement the function within the `word_searcher.js`.

## How to run tests?

To run the test cases, use `npm test` to execute the test cases and validate your
implementation.
