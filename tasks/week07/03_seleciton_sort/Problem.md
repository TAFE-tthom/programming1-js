# Selection Sort

You are to implement `selectionSort`, this is a simple sorting function that will follow the function signature below:

```js
function selectionSort(array);
```

* Finding the Smallest value/index inside an array using `getMinIndex`.

* Iterating through the array once identifying the smallest value, swapping it with the current location that is being operated on.

You can use the following pseudo-code to help guide your implementation:

```
array = [...] 
i = 0
N = number of elements in array

while i is less than N; do

  j = i+1
  minIndex = i
  
  while j is less than N; do

    if array[j] is less than array[minIndex]; do
      minIndex = j

  // Swaps
  
  tmp = array[i]
  array[i] = array[minIndex]
  array[minIndex] = tmp

```
