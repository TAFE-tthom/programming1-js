
# Associative Array

You have been tasked with constructing an associative array. An associative array is a kind of map. However, with this question, you have a constraint you will need to adhere to.

You cannot use Objects as a Map to create an associative array, you need to complete the following class `ArrayMap` and the methods:

* `constructor()` - Creates an empty `ArrayMap`. Should initialise a key array and a values array.

* `static withArrays(keys, values)` - Creates an ArrayMap with the keys and values arrays.

* `getElement(key)` - Gets an element by its key, if the key exists within the `ArrayMap`, you will need to return the value associated with that key.

* `setElement(key, value)` - Sets an element, associated to key. When `getElement` is called with the same key, it should return it.

* `removeElement(key)` - Removes and returns the value from the `ArrayMap`

* `keys()` - Gets the array of keys

* `values()` - Gets the array of values

Make sure each of these methods are implemented correctly.


## How to test

You can test your application using `npm test` inside the project folder. Make sure you have installed the required dependencies using `npm install`.
