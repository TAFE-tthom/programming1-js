
# Job List

A crafty way you can use `callbacks` is by maintaining a collection of them. Your task is to implement a class called `JobQueue` that will allow you to `addJob` and `getNextJob` them after you have added them.

`addJob(taskFn)` - This will add a function to the end of an array of functions inside the object.

`getNextJob()` - This will return next function inside the `JobQueue` and remove it from the list. If the list is empty, it will return `null`.

Example:

```js
function doHomework() {
  return "I am doing homework";
}

function playGames() {
  return "I am playing games"
}

function gotoSleep() {
  return "I am sleeping. Zzzz...";
}


let jobq = new JobQueue();

jobq.addJob(doHomework);
jobq.addJob(playGames);
jobq.addJob(gotoSleep);

let fn = jobq.getNextJob();
let result = fn(); // Will return 'I am doing homework'

fn = jobq.getNextJob();
result = fn(); // Will return 'I am playing games'
  
fn = jobq.getNextJob();
result = fn(); // Will return 'I am sleeping. Zzzz...'
```


