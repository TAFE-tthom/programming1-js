# Searching on Criteria

Your goal is to generalise a component of `searching`. You are to construct a function that would normally search an array and identify an element inside it, usually by a numeric or string value.

However, we are going to go one step closer to being able to support a search for any kind of object using `callbacks`.

Implement the following function:

```js
function searchArray(array, obj, comparator);
```

The function `searchArray` has 3 parameters, each parameter plays a significant role in generalisng the searching.

`array` - This collection could contain any kind of object, the assumption though is that an array contains only a particular type of object (an array contains numbers, we aren't mixing strings and numbers inside an array).

`obj` - This is the object we are looking for. This can be any kind of object, as it can be a number, string, instance of a `Person` class, who know!

`comparator` - This is what makes our search powerful. `comparator` is a callback function with two parameters, `a` and `b`. This function is given to `searchArray` to know how to compare two objects. If the two objects are the same, the function should return `true`, if not `false`. When the comparator returns `true`, the found object should be returned, otherwise return `null`.

Example:
```js
let people = [
  { name: 'Jeff', age: 33 },
  { name: 'Alice', age: 26 },
  { name: 'Bob', age: 92 },
  { name: 'Alice', age: 45 },
  { name: 'Jake', age: 22 },
]

function comparePeople(a, b) {
  if(a.name === b.name && a.age === b.age) {
    return true;
  } else {
    return false;
  }
}
let toFind = { name: 'Alice', age: 45 }
let result = searchArray(people, toFind, comparePeople); //Returns 4th entry

```




