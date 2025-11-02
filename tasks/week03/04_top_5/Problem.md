

# Top 5

You have been tasked with writing a program that will get the top 5 most common words in an array. You will implement a function called `mostCommon`. Your code will need to iterate through the array and discover what words are frequently used.


Implement the following:
```
function mostCommon(words) {

  //Your implementation
  return [];
}
```

* `words` - Paramater that will contain an array of strings (words in this case).

* Order of frequency is not required with the top 5

* It will need to return an array of 5 elements which indicate the top 5 most common words.

* If there are less than 5 words, you only need to return the words that appear in the array, do not have repeats.

* Consider using a `Map` data structure to maintain a link between the word and its frequency.

* Edge case that you do not need to consider: You do not need to consider a case where there are more than 5 words which have the same frequency. 

## How to test

You can test your implementation by using `npm test` which will invoke the test cases associated with `jest`.
