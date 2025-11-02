# Sequence

You are tasked with writing a sequence generator object.

This class will require the use of default values in the constructor. Along with 3 methods associated.

* `constructor(start, step=1, end=null)` - Creates a SequenceGen object with a starting
    integer, the step will be set to 1 and is implied to never end.
    `step` default value is 1, this can be changed via an argument, step must be greater than or equal to 1.
    The `end` integer is implied to provide a stop, the default value is null which implies that it never ends, if it is not null, the when the `current()` is greater than or equal to `end`, it implies the sequence has finished.

* `current()` - Returns the integer that the generator is at.

* `finished()` - Outlines if the generator is finished, if
    an end was not specified, the method will return false, otherwise
    if the current number exceeds the `end` value.

* `next()` - Returns the current integer and moves to the next
    integer based on `step`. 


You may assume that the sequence only handles positive integers and that
the step integer is greater than 0 and end is greater than start.

## How to test

You can test your solution against your implemented class by calling
`npm test`. If you run into an error, please make sure you have installed the dependencies required with `npm install`.
