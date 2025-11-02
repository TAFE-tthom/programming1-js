# Your Grade

You are required to implement a function called `yourGrade` that will
compute your current grade given the mark you have received from your semester.

The function `yourGrade` has one parameter called `mark`, `mark` is a number that corresponds to a number between 0 and 100, The function `yourGrade` will return
a string which will contain 1 character that corresponds to the grade ('A', 'B'...)

* Given a mark of 85 or above, your function should return A
* Given a mark of 75 or above, your function should return B
* Given a mark of 65 or above, your function should return C
* Given a mark of 50 or above, your function should return D
* Given a mark below 50, your function should return F.
* Given a mark of -10, your function should return I

Example of usage 1:

```
let grade = yourGrade(63); // D
```

Example of usage 2:

```
let grade = yourGrade(90); // A
```

Example of usage 3:

```
let grade = yourGrade(40); // F
```

Example of invalid mark:

````
let grade = yourGrade(-10); // I
````

## How to test your program

You can test your program by running `npm test` against a suite of test cases.

