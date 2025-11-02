

# Most Recent

You have been tasked with writing a simple algorithm that will be used to maintain the most recently used element at the beginning of the list.


Implement the function `accessElement` as outlined in `most_recent.js` file.

```js
function accessElement(list, idx) {
 //Your implementation here
}
```

The `accessElement` function will be given a `Array` under the parameter `list` and `idx` parameter which will correspond to the type `number`.

* When called with a list and index, if an element can be accessed, it will return that element but we also need to ensure that it is swapped to the front.

* If `idx` is a negative value or greater than the length of `list`, `null` should be returned.

* If `idx` is 0, the most recent is simply going to remain the same.

## How to test

To test your implementation, use `npm test`, make sure you install the dependencies 
